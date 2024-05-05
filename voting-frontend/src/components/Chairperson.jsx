import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ballotJson from '../../../build/contracts/Ballot.json';
import userProfileJson from '../../../build/contracts/UserProfile.json';

function Chairperson() {
  const [web3, setWeb3] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [registrationTime, setRegistrationTime] = useState('');
  const [registrationTimeFormat, setRegistrationTimeFormat] = useState('minutes');
  const [votingTime, setVotingTime] = useState('');
  const [votingTimeFormat, setVotingTimeFormat] = useState('minutes');
  const [maxCandidates, setMaxCandidates] = useState('');
  const [userProfileAddress, setUserProfileAddress] = useState(localStorage.getItem('userProfileAddress') || '');
  const [ballotAddress, setBallotAddress] = useState(localStorage.getItem('ballotAddress') || '');
  const [deploymentDisabled, setDeploymentDisabled] = useState(false);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          const accounts = await web3Instance.eth.getAccounts();
          setUserAccount(accounts[0]);
        } catch (error) {
          console.error('Failed to connect to wallet', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };
    initWeb3();
  }, []);

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
    <div className='min-h-screen flex items-center justify-center'
         style={{
           backgroundImage: 'url("your-background-image-url")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      <div className='max-w-4xl mx-auto p-6 bg-gray-700 bg-opacity-80 rounded-lg shadow-lg text-white' style={{
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-100 shadow-lg'>
          Setup Contracts
        </h1>
  
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <div>
            <label htmlFor='registrationTime' className='block text-sm font-medium mb-2 text-white shadow-lg'>
              Registration Time:
            </label>
            <input
              type='number'
              id='registrationTime'
              placeholder='Enter time'
              value={registrationTime}
              onChange={(e) => setRegistrationTime(e.target.value)}
              className='input input-bordered w-full max-w-xs bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
              disabled={deploymentDisabled}
            />
            <select
              value={registrationTimeFormat}
              onChange={(e) => setRegistrationTimeFormat(e.target.value)}
              className='mt-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white'
              disabled={deploymentDisabled}>
              <option value='minutes'>Minutes</option>
              <option value='hours'>Hours</option>
              <option value='days'>Days</option>
            </select>
          </div>
          <div>
            <label htmlFor='votingTime' className='block text-sm font-medium mb-2 text-white shadow-lg'>
              Voting Time:
            </label>
            <input
              type='number'
              id='votingTime'
              placeholder='Enter time'
              value={votingTime}
              onChange={(e) => setVotingTime(e.target.value)}
              className='input input-bordered w-full max-w-xs bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
              disabled={deploymentDisabled}
            />
            <select
              value={votingTimeFormat}
              onChange={(e) => setVotingTimeFormat(e.target.value)}
              className='mt-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white'
              disabled={deploymentDisabled}>
              <option value='minutes'>Minutes</option>
              <option value='hours'>Hours</option>
              <option value='days'>Days</option>
            </select>
          </div>
        </div>
  
        <div className='mb-6'>
          <label htmlFor='maxCandidates' className='block text-sm font-medium mb-2 text-white shadow-lg'>
            Maximum Candidates/Proposals:
          </label>
          <input
            type='number'
            id='maxCandidates'
            placeholder='Enter max candidates'
            value={maxCandidates}
            onChange={(e) => setMaxCandidates(e.target.value)}
            className='input input-bordered w-full max-w-xs bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            disabled={deploymentDisabled}
          />
        </div>
  
        <div className='text-center'>
          <button
            onClick={deployContracts}
            className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg'
            style={{
              transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px) scale(1)'}
            disabled={deploymentDisabled}>
            Deploy Contracts
          </button>
        </div>
        {userProfileAddress && (
          <p className='text-white shadow-lg'>User Profile Contract Address: {userProfileAddress}</p>
        )}
        {ballotAddress && <p className='text-white shadow-lg'>Ballot Contract Address: {ballotAddress}</p>}
      </div>
    </div>
  );
  
}

export default Chairperson;