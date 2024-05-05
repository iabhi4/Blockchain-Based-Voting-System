import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ballotJson from '../../../build/contracts/Ballot.json';

const Ballot = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [userStatus, setUserStatus] = useState('');
  const [delegateAddress, setDelegateAddress] = useState('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          const contractInstance = new web3Instance.eth.Contract(
            ballotJson.abi,
            localStorage.getItem('ballotAddress')
          );
          setWeb3(web3Instance);
          setAccount(accounts[0]);
          setContract(contractInstance);
          checkUserStatus(contractInstance, accounts[0]);
        } catch (error) {
          console.error('Failed to connect to MetaMask', error);
        }
      } else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const checkUserStatus = async (contractInstance, userAddress) => {
    const voterExists = await contractInstance.methods
      .checkVoterExists(userAddress)
      .call();
    if (!voterExists) {
      await contractInstance.methods
        .initializeVoter(userAddress)
        .send({ from: userAddress });
    }
    const hasVoted = await contractInstance.methods
      .hasVoted(userAddress)
      .call();
    if (hasVoted) {
      setUserStatus('You have already voted.');
    } else {
      setUserStatus(
        'You are eligible to vote. Please select a proposal or delegate your vote.'
      );
      fetchProposals(contractInstance);
    }
  };

  const fetchProposals = async (contractInstance) => {
    const loadedProposals = await contractInstance.methods
      .getProposals()
      .call();
    setProposals(loadedProposals);
  };

  const vote = async (proposalIndex) => {
    try {
      await contract.methods.vote(proposalIndex).send({ from: account });
      setUserStatus('Thank you for voting!');
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const delegateVote = async () => {
    try {
      await contract.methods.delegate(delegateAddress).send({ from: account });
      setUserStatus(`You have delegated your vote to ${delegateAddress}.`);
    } catch (error) {
      console.error('Error delegating vote:', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'
         style={{
           backgroundImage: 'url("your-background-image-url")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      <div className='max-w-xl w-full p-6 bg-gray-700 bg-opacity-80 rounded-xl shadow-lg space-y-4 text-white'
           style={{
             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
             textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
             transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
             transform: 'scale(1.01)',
             backdropFilter: 'blur(10px)'
           }}>
        <h1 className='text-2xl font-semibold text-center'>Ballot</h1>
        <section>
          <h2 className='text-lg font-medium'>Proposals</h2>
          <ul className='list-none space-y-2'>
            {proposals.map((proposal, index) => (
              <li key={index} className='flex justify-between items-center p-2 bg-transparent rounded-lg border border-gray-300'>
                <span className='font-light'>Proposal {index + 1}</span>
                <button onClick={() => vote(index)} className='px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300'>
                  Vote
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className='text-lg font-medium'>Delegate Vote</h2>
          <input
            type='text'
            value={delegateAddress}
            onChange={(e) => setDelegateAddress(e.target.value)}
            placeholder='Enter delegate address'
            className='w-full p-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
          <button onClick={delegateVote} className='mt-2 w-full p-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300'
                  style={{
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px) scale(1)'}
          >
            Delegate
          </button>
        </section>
        <section>
          <h2 className='text-lg font-medium'>User Status</h2>
          <p className='p-2 bg-transparent rounded'>{userStatus}</p>
        </section>
      </div>
    </div>
  );
  
};  

export default Ballot;