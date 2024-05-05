import React from 'react';

const BallotStatus = ({ registrationTime, votingTime }) => {
  const currentTime = new Date(); // Get current time at the moment of rendering
  let status;

  if (currentTime < registrationTime) {
    status = 'Voting has not started yet.';
    return (
      <div
        className='bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4'
        role='alert'>
        <p className='font-bold'>Ballot Status</p>
        <p>{status}</p>
      </div>
    );
  } else if (currentTime >= votingTime) {
    status = 'Voting has ended.';
    return (
      <div
        className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'
        role='alert'>
        <p className='font-bold'>Ballot Status</p>
        <p>{status}</p>
      </div>
    );
  }
};

export default BallotStatus;
