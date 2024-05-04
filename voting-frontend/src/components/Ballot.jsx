// src/components/Ballot.jsx
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
    <div className='max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md'>
      <h1 className='text-xl font-bold text-center mb-4'>Ballot</h1>
      <div>
        <h2>Proposals</h2>
        <ul>
          {proposals.map((proposal, index) => (
            <li key={index}>
              <button onClick={() => vote(index)} className='btn'>
                Vote for Proposal {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Delegate Vote</h2>
        <input
          type='text'
          value={delegateAddress}
          onChange={(e) => setDelegateAddress(e.target.value)}
          placeholder='Enter delegate address'
          className='input input-bordered'
        />
        <button onClick={delegateVote} className='btn btn-primary mt-2'>
          Delegate
        </button>
      </div>
      <div>
        <h2>User Status</h2>
        <p>{userStatus}</p>
      </div>
    </div>
  );
};

export default Ballot;
