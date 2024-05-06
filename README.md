# Blockchain-Based-Voting-System

This readme is meant to be read by Sanjyot (informal language ahead)
Prerequisite - 
Gananche should be started (No need of linking truffle project) 

Flow of project -
- The first screen is the chairperson screen where the chairperson sets three parameters (registeration time, voting time, maximum candidates allowed). All the three parameters are then sent to Ballot contract storage, and registeration time, maximum candidates is sent to Userprofile contract to lock the functionalities of UI once the time and maximum quota runs out. (How it is working? Suppose if currentTime is 12:54 and chairperson sets 2 minutes for registration time, and 2 minutes for voting time, then the registeration time will be from 12:54 to 56, and voting time will be from 12:56 to 58)
- You can then use /userProfile route to access the userProfile page in the registeration Period and register the users, also if the user wants to become candidates and register their proposal, they can. (If chairperson set maximum candidates as 2, then the first 2 users who register themselves as candidates will become candidates)
- The Ballot contract is locked until the registeration Period is over, it is only open when current time is greater than registration and less than voting, So once registeration period is over, you can come to Ballot contract using /ballot route and fetch the proposals, when you click this button, this will fetch proposal from UserProfile via transaction, and once it is fetched, the proposals array in  storage will be initialized so that we don't have to do this transaction everytime. The Fetch proposal button should also be disabled once the array is initialized. Then the users can vote and shit and based on that their user status should change.
- At last when voting is ended, the ballot contract will lock and the winner name is displayed (this is not yet implemented, ghar aake karta hu tabtak baaki saari chize convert kar)
  Also make sure to add the real time voting analysis code jaha pe bhi karna hai

After converting everything to react check the following - 
Enhancements on base
- Contracts are now being deployed from UI and fixed hardcoding - DONE
- A new UserProfile contract for storing user data - DONE
- Users can become candidates and submit their own proposal in registeration time - DONE
- Real time voting analysis - DONE
- Chairperson decides the registeration time, voting time, maximum candidates. Based on that, everything is happening - DONE
- Identity verification - only the people who have registered in the registeration period can vote - Done ? (this is done but the code is commented out, I will check this raat me)
- Fix tie in winningProposal() issue - In Progress
- Interactive UI in React where every thing is happening- Not started



# Blockchain Voting System - Voting DApp Project

## Team Members


- **Abhinav Singh** - 884448622 - abhinavsingh@csu.fullerton.edu
- **Aditya Singh** - 884448614 - singhaditya@csu.fullerton.edu
- **Sanjyot Satvi** - 885146977 - satvi.sanjyot@csu.fullerton.edu
- **Sumit Rodrigues** - 885164426 - sumit.rodrigues@csu.fullerton.edu

## Project Overview

The Blockchain Voting System is a decentralized application (DApp) designed to facilitate secure and transparent voting processes using Ethereum smart contracts. The project enables real-time voting analysis and is developed using React for a dynamic user experience.

## Project Flow

### Chairperson Setup
- **Initial Setup**: The chairperson sets registration time, voting time, and the maximum number of candidates.
- **Parameter Storage**: These settings are stored in the `Ballot` contract and `UserProfile` contract to control UI functionality and registration logic.

### User Registration and Voting
- **User Profile Access**: Accessible via `/userProfile` route during the registration period for user registration and candidate proposal submissions.
- **Voting Process**: Post-registration, the `Ballot` contract becomes active for voting within the set timeframe. Proposals are fetched and stored to minimize transaction re-execution.

### Post-Voting
- **Result Compilation**: After the voting period ends, the contract locks, and the system is set to display the winning candidate (to be completed).

## Enhancements Implemented

1. **Dynamic Contract Deployment**: Users can deploy contracts directly from the UI.
2. **UserProfile Contract**: A new contract for managing user data and candidate registration.
3. **Real-Time Voting Analysis**: Enables live tracking of voting activities.
4. **Extended Chairperson Controls**: Includes time management and candidate limits.
5. **Identity Verification**: Restricts voting to registered users within the allotted time (pending final checks).
6. **Tie Resolution in Winning Proposal**: Implementation is currently in progress.
7. **Interactive UI**: Plans to transition the UI to React for enhanced interactivity (not started).

## Installation and Setup

To set up and run the Blockchain Voting System on your local machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/iabhi4/Blockchain-Based-Voting-System/tree/main
2. Install dependencies:
   npm install

3. Start Ganache and ensure it's running in the background.

4. Connect your MetaMask wallet to the local network and import accounts from Ganache.

5. Deploy the smart contracts using the UI provided within the project.

6. Run the frontend application:
   npm start

## Technologies Used

- Ethereum for smart contracts
- Ganache for a local blockchain environment
- Web3.js for Ethereum blockchain interaction
- React and MUI for frontend development

## GitHub Link to the DApp: https://github.com/iabhi4/Blockchain-Based-Voting-System/tree/main

Feel free to dive into the project, test the functionalities, and push improvements or bug fixes. If you encounter any issues or have suggestions, don't hesitate to reach out or contribute directly to the repo.

---
