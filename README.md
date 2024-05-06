# Blockchain-Based-Voting-System

## Team Members

- **Sumit Rodrigues** - 885164426 - sumit.rodrigues@csu.fullerton.edu
- **Sanjyot Satvi** - 885146977 - satvi.sanjyot@csu.fullerton.edu
- **Abhinav Singh** - 884448622 - abhinavsingh@csu.fullerton.edu
- **Aditya Singh** - 884448614 - singhaditya@csu.fullerton.edu

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
   git clone https://github.com/meetmerchant/blockchain-voting.git

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

## GitHub Link to the DApp: 

Feel free to dive into the project, test the functionalities, and push improvements or bug fixes. If you encounter any issues or have suggestions, don't hesitate to reach out or contribute directly to the repo.

---
