import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ballotJson from '../../../build/contracts/Ballot.json';

const Ballot = () => {
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [delegateAddress, setDelegateAddress] = useState('');
  const [userStatus, setUserStatus] = useState('Loading...');
  const [isBallotActive, setIsBallotActive] = useState(false);
  const [proposalsChecked, setProposalsChecked] = useState(false);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        const contractAddress = localStorage.getItem('ballotAddress');
        const contractAbi = ballotJson.abi;
        const loadedContract = new web3.eth.Contract(
          contractAbi,
          contractAddress
        );
        setContract(loadedContract);

        const voterExists = await loadedContract.methods
          .checkVoterExists(userAddress)
          .call();
        if (!voterExists) {
          await loadedContract.methods
            .initializeVoter(userAddress)
            .send({ from: userAddress });
        }
        const hasVoted = await loadedContract.methods
          .hasVoted(userAddress)
          .call();
        setUserStatus(
          hasVoted
            ? 'You have already voted.'
            : 'Click on one of the proposals to vote for them or you can also wish to delegate to someone else.'
        );

        const currentTime = new Date();
        const registrationTime = new Date(
          Number(await loadedContract.methods.getRegistrationTime().call()) *
            1000
        );
        const votingTime = new Date(
          Number(await loadedContract.methods.getVotingTime().call()) * 1000
        );

        setIsBallotActive(
          currentTime >= registrationTime && currentTime < votingTime
        );
        setUserStatus(
          currentTime >= votingTime
            ? 'Voting has ended.'
            : 'Voting will start after the Registration Period.'
        );

        if (!proposalsChecked) {
          fetchProposals(loadedContract, userAddress);
        }
      } else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
      }
    };

    loadBlockchainData();
  }, [proposalsChecked]);

  const fetchProposals = async (contract, userAddress) => {
    try {
      await contract.methods
        .fetchProposals()
        .send({ from: userAddress, gas: '5000000' });
      const fetchedProposals = await contract.methods.getProposals().call();
      if (fetchedProposals.length === 0 && !proposalsChecked) {
        // Schedule another check in 10 seconds if proposals are still not available
        setTimeout(() => fetchProposals(contract, userAddress), 10000);
      } else {
        setProposals(fetchedProposals);
        setProposalsChecked(true); // Ensure we don't refetch unnecessarily
      }
    } catch (error) {
      console.error('Error fetching proposals:', error);
    }
  };

  const handleDelegateVote = async () => {
    if (!window.ethereum) {
      console.log(
        'Ethereum object not found, you should consider using MetaMask!'
      );
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();

    try {
      await contract.methods
        .delegate(delegateAddress)
        .send({ from: accounts[0] });
      setUserStatus('Delegate vote successful.');
    } catch (error) {
      console.error('Error occurred while delegating vote:', error);
      setUserStatus('Failed to delegate vote.');
    }
  };

  const handleVote = async (index) => {
    const accounts = await window.web3.eth.getAccounts();
    try {
      await contract.methods.vote(index).send({ from: accounts[0] });
      setUserStatus(`You voted for proposal ${index + 1}.`);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className='max-w-xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Ballot</h1>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Proposals</h2>
        <ul>
          {proposals.map((proposal, index) => (
            <li key={index}>{proposal}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Delegate Vote</h2>
        <input
          type='text'
          value={delegateAddress}
          onChange={(e) => setDelegateAddress(e.target.value)}
          placeholder='Enter delegate address'
          disabled={!isBallotActive}
          className='w-full px-3 py-2 mb-2 rounded border'
        />
        <button
          onClick={handleDelegateVote}
          disabled={!isBallotActive}
          className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50'>
          Delegate
        </button>
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Vote</h2>
        <div>
          {proposals.map((proposal, index) => (
            <button
              key={index}
              onClick={() => handleVote(index)}
              disabled={!isBallotActive}
              className='px-4 py-2 mr-2 mb-2 bg-green-500 text-white rounded disabled:opacity-50'>
              Vote for {proposal}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>User Status</h2>
        <p>{userStatus}</p>
      </div>
    </div>
  );
};

export default Ballot;
