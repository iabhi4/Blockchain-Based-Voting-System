// src/components/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import userProfileJson from '../../../build/contracts/UserProfile.json';
import axios from 'axios';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [residence, setResidence] = useState('');
  const [isCandidate, setIsCandidate] = useState('no');
  const [proposalName, setProposalName] = useState('');
  const [userProfileContract, setUserProfileContract] = useState(null);
  const [registrationEndTime, setRegistrationEndTime] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [formDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          const userProfileAddress = localStorage.getItem('userProfileAddress');
          const contract = new web3Instance.eth.Contract(
            userProfileJson.abi,
            userProfileAddress
          );
          setUserProfileContract(contract);

          const registrationTime = await contract.methods
            .getRegistrationTimePeriod()
            .call();
          const currentTime = Math.floor(Date.now() / 1000);
          if (currentTime > registrationTime) {
            setFormDisabled(true);
            alert(
              'Registration Time is closed. Go to Ballot to vote for your favorite proposal.'
            );
          } else {
            setRegistrationEndTime(new Date(Number(registrationTime) * 1000));
          }
        } catch (error) {
          console.error('Could not connect to wallet', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userProfileContract || !account) return;
    const hasRegistered = await userProfileContract.methods
      .checkUserExists(account)
      .call();
    if (hasRegistered) return alert('User profile already registered!');
    // Verify document number with external API
    try {
      const verificationResponse = await axios.post(
        'http://localhost:4000/verifyDocument',
        {
          documentNumber,
        }
      );
      if (!verificationResponse.data.verified) {
        return alert('Registration declined: user not found in database.');
      }
    } catch (error) {
      console.error('Verification failed', error);
      return alert('Failed to verify user document number.');
    }
    try {
      await userProfileContract.methods
        .registerUserProfile(
          name,
          age,
          documentNumber,
          residence,
          isCandidate === 'yes',
          proposalName
        )
        .send({ from: account });
      alert('User profile registered successfully!');
      setFormDisabled(true); // Disable form after successful registration
    } catch (error) {
      console.error(error);
      alert('Failed to register user profile. Please try again.');
    }
  };

  return (
    <div className='max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
        User Profile Registration
      </h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Name:
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={formDisabled}
            className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Age:
          </label>
          <input
            type='number'
            placeholder='Enter your age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            disabled={formDisabled}
            className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Document Number:
          </label>
          <input
            type='text'
            placeholder='Document Number'
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            disabled={formDisabled}
            className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Residence:
          </label>
          <input
            type='text'
            placeholder='Place of Residence'
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            disabled={formDisabled}
            className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Become a candidate:
          </label>
          <select
            value={isCandidate}
            onChange={(e) => setIsCandidate(e.target.value)}
            disabled={formDisabled}
            className='block w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </div>
        {isCandidate === 'yes' && (
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Proposal Name:
            </label>
            <input
              type='text'
              placeholder='Proposal Name'
              value={proposalName}
              onChange={(e) => setProposalName(e.target.value)}
              disabled={formDisabled}
              className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
        )}
        <button
          type='submit'
          disabled={formDisabled}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
