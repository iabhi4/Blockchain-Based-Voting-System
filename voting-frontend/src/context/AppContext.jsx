// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [registrationTime, setRegistrationTime] = useState('');
    const [votingTime, setVotingTime] = useState('');
    const [maxCandidates, setMaxCandidates] = useState('');

    const deployContracts = () => {
        // Add your contract deployment logic here
        console.log("Deploying Contracts...");
    };

    return (
        <AppContext.Provider value={{
            registrationTime,
            setRegistrationTime,
            votingTime,
            setVotingTime,
            maxCandidates,
            setMaxCandidates,
            deployContracts
        }}>
            {children}
        </AppContext.Provider>
    );
};
