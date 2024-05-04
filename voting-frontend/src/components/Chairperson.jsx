// src/components/Chairperson.jsx
import React, { useState } from 'react';

function Chairperson() {
    const [registrationTime, setRegistrationTime] = useState('');
    const [votingTime, setVotingTime] = useState('');
    const [maxCandidates, setMaxCandidates] = useState('');

    const deployContracts = () => {
        console.log("Deploying Contracts...");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Setup Contracts</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="registrationTime" className="block text-gray-700 text-sm font-medium mb-2">Registration Time:</label>
                    <input
                        type="number"
                        id="registrationTime"
                        placeholder="Enter time in minutes"
                        value={registrationTime}
                        onChange={(e) => setRegistrationTime(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <label htmlFor="votingTime" className="block text-gray-700 text-sm font-medium mb-2">Voting Time:</label>
                    <input
                        type="number"
                        id="votingTime"
                        placeholder="Enter time in minutes"
                        value={votingTime}
                        onChange={(e) => setVotingTime(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="maxCandidates" className="block text-gray-700 text-sm font-medium mb-2">Maximum Candidates/Proposals:</label>
                <input
                    type="number"
                    id="maxCandidates"
                    placeholder="Enter max candidates"
                    value={maxCandidates}
                    onChange={(e) => setMaxCandidates(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            
            <div className="text-center">
                <button onClick={deployContracts} className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Deploy Contracts
                </button>
            </div>
        </div>
    );
}

export default Chairperson;
