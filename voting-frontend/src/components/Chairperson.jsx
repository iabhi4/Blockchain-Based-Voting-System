// src/components/Chairperson.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ballotJson from '../../../build/contracts/Ballot.json';
import userProfileJson from '../../../build/contracts/UserProfile.json';
import { useNavigate } from 'react-router-dom';

// Instantiate Web3 with your provider
// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

function Chairperson() {
  const navigate = useNavigate();
  const ballotABI = ballotJson.abi;
  const ballotBytecode = ballotJson.bytecode;

  const userProfileABI = userProfileJson.abi;
  const userProfileBytecode = userProfileJson.bytecode;

  const [registrationTime, setRegistrationTime] = useState('');
  const [registrationTimeFormat, setRegistrationTimeFormat] =
    useState('minutes');
  const [votingTime, setVotingTime] = useState('');
  const [votingTimeFormat, setVotingTimeFormat] = useState('minutes');
  const [maxCandidates, setMaxCandidates] = useState('');
  const [userProfileAddress, setUserProfileAddress] = useState(
    localStorage.getItem('userProfileAddress') || ''
  );
  const [ballotAddress, setBallotAddress] = useState(
    localStorage.getItem('ballotAddress') || ''
  );
  const [deploymentDisabled, setDeploymentDisabled] = useState(false);
  const [web3, setWeb3] = useState(null); // Store the Web3 instance
  const [userAccount, setUserAccount] = useState(null); // Store the user's account

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(
          new Web3.providers.HttpProvider('http://127.0.0.1:7545')
        );
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setUserAccount(accounts[0]);
        } catch (error) {
          console.error('Could not connect to wallet', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initWeb3();
  }, [userAccount]);

  useEffect(() => {
    if (userProfileAddress && ballotAddress) {
      setDeploymentDisabled(true);
    }
  }, [userProfileAddress, ballotAddress]);

  const deployContracts = async () => {
    if (!web3 || !userAccount) {
      return alert('Web3 not initialized or no account connected.');
    }
    const regTimeInSeconds = convertToSeconds(
      parseInt(registrationTime),
      registrationTimeFormat
    );
    const voteTimeInSeconds = convertToSeconds(
      parseInt(votingTime),
      votingTimeFormat
    );
    const currentDate = Math.floor(Date.now() / 1000);
    const registrationEndTime = currentDate + regTimeInSeconds;
    const votingEndTime = registrationEndTime + voteTimeInSeconds;

    console.log('Registraion Time' + registrationEndTime);
    console.log('Voting End Time' + votingEndTime);
    const accounts = await web3.eth.getAccounts();
    const chairperson = accounts[0];

    // Placeholder for actual ABI and bytecode
    const userProfileContract = new web3.eth.Contract(userProfileABI, {
      from: chairperson,
      gas: 3000000,
    });
    const userProfileDeployed = await userProfileContract
      .deploy({
        data: userProfileBytecode,
        arguments: [registrationEndTime, maxCandidates],
      })
      .send();

    const ballotContract = new web3.eth.Contract(ballotABI, {
      from: chairperson,
      gas: 3000000,
    });
    const ballotDeployed = await ballotContract
      .deploy({
        data: ballotBytecode,
        arguments: [
          registrationEndTime,
          votingEndTime,
          maxCandidates,
          userProfileDeployed.options.address,
        ],
      })
      .send();

    localStorage.setItem(
      'userProfileAddress',
      userProfileDeployed.options.address
    );
    localStorage.setItem('ballotAddress', ballotDeployed.options.address);
    setUserProfileAddress(userProfileDeployed.options.address);
    setBallotAddress(ballotDeployed.options.address);
    setDeploymentDisabled(true);

    navigate('/display-fields');
  };

  const convertToSeconds = (time, format) => {
    switch (format) {
      case 'days':
        return time * 86400;
      case 'hours':
        return time * 3600;
      case 'minutes':
        return time * 60;
      default:
        return time;
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
        Setup Contracts
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
        <div>
          <label
            htmlFor='registrationTime'
            className='block text-gray-700 text-sm font-medium mb-2'>
            Registration Time:
          </label>
          <input
            type='number'
            id='registrationTime'
            placeholder='Enter time'
            value={registrationTime}
            onChange={(e) => setRegistrationTime(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            disabled={deploymentDisabled}
          />
          <select
            value={registrationTimeFormat}
            onChange={(e) => setRegistrationTimeFormat(e.target.value)}
            className='mt-2'
            disabled={deploymentDisabled}>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
            <option value='days'>Days</option>
          </select>
        </div>
        <div>
          <label
            htmlFor='votingTime'
            className='block text-gray-700 text-sm font-medium mb-2'>
            Voting Time:
          </label>
          <input
            type='number'
            id='votingTime'
            placeholder='Enter time'
            value={votingTime}
            onChange={(e) => setVotingTime(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            disabled={deploymentDisabled}
          />
          <select
            value={votingTimeFormat}
            onChange={(e) => setVotingTimeFormat(e.target.value)}
            className='mt-2'
            disabled={deploymentDisabled}>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
            <option value='days'>Days</option>
          </select>
        </div>
      </div>

      <div className='mb-6'>
        <label
          htmlFor='maxCandidates'
          className='block text-gray-700 text-sm font-medium mb-2'>
          Maximum Candidates/Proposals:
        </label>
        <input
          type='number'
          id='maxCandidates'
          placeholder='Enter max candidates'
          value={maxCandidates}
          onChange={(e) => setMaxCandidates(e.target.value)}
          className='input input-bordered w-full max-w-xs'
          disabled={deploymentDisabled}
        />
      </div>

      <div className='text-center'>
        <button
          onClick={deployContracts}
          className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          disabled={deploymentDisabled}>
          Deploy Contracts
        </button>
      </div>
      {userProfileAddress && (
        <p>User Profile Contract Address: {userProfileAddress}</p>
      )}
      {ballotAddress && <p>Ballot Contract Address: {ballotAddress}</p>}
    </div>
  );
}

export default Chairperson;
