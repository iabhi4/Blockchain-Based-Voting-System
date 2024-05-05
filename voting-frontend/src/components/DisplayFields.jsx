// src/components/DisplayFields.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import userProfileJson from '../../../build/contracts/UserProfile.json';
import ballotJson from '../../../build/contracts/Ballot.json';

const DisplayFields = () => {
  const [web3, setWeb3] = useState(null);
  const [userProfileData, setUserProfileData] = useState([]);
  const [ballotData, setBallotData] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        await displayUserProfileStorage(web3Instance);
        await displayBallotStorage(web3Instance);
      } else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const displayUserProfileStorage = async (web3Instance) => {
    const contractAddress = localStorage.getItem('userProfileAddress');
    const contract = new web3Instance.eth.Contract(
      userProfileJson.abi,
      contractAddress
    );
    const profilesCount = await contract.methods.profilesCount().call();
    const profiles = [];

    for (let i = 0; i < profilesCount; i++) {
      const profile = await contract.methods.getProfile(i).call();
      profiles.push(profile);
    }

    setUserProfileData(profiles);
  };

  const displayBallotStorage = async (web3Instance) => {
    const contractAddress = localStorage.getItem('ballotAddress');
    const contract = new web3Instance.eth.Contract(
      ballotJson.abi,
      contractAddress
    );

    const chairpersonDetails = await contract.methods
      .getChairpersonDetails()
      .call();
    const votersCount = await contract.methods.votersCount().call();
    const proposalsCount = await contract.methods.proposalsCount().call();

    const voters = [];
    for (let i = 0; i < votersCount; i++) {
      const voter = await contract.methods.getVoter(i).call();
      voters.push({
        userAddress: voter.userAddress,
        weight: voter.weight,
        voted: voter.voted,
        delegate: voter.delegate,
        vote: voter.vote,
      });
    }

    const proposals = [];
    for (let i = 0; i < proposalsCount; i++) {
      const proposal = await contract.methods.getProposal(i).call();
      proposals.push({
        name: proposal.name,
        voteCount: proposal.voteCount,
      });
    }

    setBallotData({
      chairpersonDetails,
      voters,
      proposals,
    });

    console.log(chairpersonDetails);
  };

  return (
    <div className='max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-center'>
        Contract Storage Viewer
      </h1>

      <div>
        <h2 className='text-lg font-semibold mt-4'>
          User Profile Contract Storage
        </h2>
        <ul>
          {userProfileData.map((profile, index) => (
            <li key={index} className='my-2 p-2 bg-gray-100 rounded'>
              <div>User Address: {profile.userAddress}</div>
              <div>Name: {profile.name}</div>
              <div>Age: {Number(profile.age)}</div>
              <div>Document Number: {profile.documentNumber}</div>
              <div>Residence: {profile.residence}</div>
              <div>
                Eligible to Vote: {profile.eligibleToVote ? 'Yes' : 'No'}
              </div>
              <div>Is Candidate: {profile.isCandidate ? 'Yes' : 'No'}</div>
              <div>Proposal Name: {profile.proposal}</div>
            </li>
          ))}
        </ul>
      </div>

      <hr className='my-4' />

      <div>
        <h2 className='text-lg font-semibold mt-4'>Ballot Contract Storage</h2>
        {ballotData.chairpersonDetails && (
          <div>
            <p>
              <strong>Chairperson Address:</strong>{' '}
              {ballotData.chairpersonDetails.chairpersonAddress}
            </p>
            <p>
              <strong>Voting Time:</strong>{' '}
              {new Date(
                Number(ballotData.chairpersonDetails.votingTime) * 1000
              ).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
            </p>
            <p>
              <strong>Registration Time:</strong>{' '}
              {new Date(
                Number(ballotData.chairpersonDetails.registrationTime) * 1000
              ).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
              ;
            </p>
            <p>
              <strong>Number of Candidates:</strong>{' '}
              {Number(ballotData.chairpersonDetails.numberOfCandidates)}
            </p>
          </div>
        )}
      </div>
      <div>
        <h2 className='text-lg font-semibold mt-4'>Voters</h2>
        {ballotData.voters &&
          ballotData.voters.map((voter, index) => (
            <div key={index} className='my-2 p-2 bg-gray-100 rounded'>
              <p>User Address: {voter.userAddress}</p>
              <p>Weight: {Number(voter.weight)}</p>
              <p>Voted: {voter.voted ? 'Yes' : 'No'}</p>
              <p>Delegate: {voter.delegate}</p>
              <p>Vote: {Number(voter.vote)}</p>
            </div>
          ))}

        <hr className='my-4' />

        <h2 className='text-lg font-semibold mt-4'>Proposals</h2>
        {ballotData.proposals &&
          ballotData.proposals.map((proposal, index) => (
            <div key={index} className='my-2 p-2 bg-gray-100 rounded'>
              <p>Name: {proposal.name}</p>
              <p>Vote Count: {Number(proposal.voteCount)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayFields;
