// src/components/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import userProfileJson from '../../../build/contracts/UserProfile.json';

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
    <div className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url("your-background-image-url")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className='max-w-lg w-full p-4 bg-gray-700 bg-opacity-80 rounded-lg shadow-lg text-white' style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease'
      }}>
        <h1 className='text-2xl font-semibold text-center mb-6'>
          User Profile Registration
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>
              Name:
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={formDisabled}
              className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Age:
            </label>
            <input
              type='number'
              placeholder='Enter your age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              disabled={formDisabled}
              className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Document Number:
            </label>
            <input
              type='text'
              placeholder='Document Number'
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              disabled={formDisabled}
              className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Residence:
            </label>
            <input
              type='text'
              placeholder='Place of Residence'
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              disabled={formDisabled}
              className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Become a candidate:
            </label>
            <select
              value={isCandidate}
              onChange={(e) => setIsCandidate(e.target.value)}
              disabled={formDisabled}
              className='block w-full mt-1 px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
          </div>
          {isCandidate === 'yes' && (
            <div>
              <label className='block text-sm font-medium'>
                Proposal Name:
              </label>
              <input
                type='text'
                placeholder='Proposal Name'
                value={proposalName}
                onChange={(e) => setProposalName(e.target.value)}
                disabled={formDisabled}
                className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          )}

          <button
            type='submit'
            disabled={formDisabled}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            style={{
              transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px) scale(1)'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
