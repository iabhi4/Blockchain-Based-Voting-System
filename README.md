# Blockchain-Based-Voting-System

## Team Members


- **Abhinav Singh** - 884448622 - abhinavsingh@csu.fullerton.edu
- **Aditya Singh** - 884448614 - singhaditya@csu.fullerton.edu
- **Sanjyot Satvi** - 885146977 - satvi.sanjyot@csu.fullerton.edu
- **Sumit Rodrigues** - 885164426 - sumit.rodrigues@csu.fullerton.edu

## Project Overview

The Blockchain Voting System is a decentralized application (DApp) designed to facilitate secure and transparent voting processes using Ethereum smart contracts. The project enables real-time voting analysis, and the UI is developed using React to provide a dynamic user experience.

## Project Flow

### Chairperson Setup
- **Initial Setup**: The chairperson sets registration time, voting time, and the maximum number of candidates.
- **Parameter Storage**: These parameters are stored in the `Ballot` contract and `UserProfile` contract to control UI functionality and registration logic.

### User Registration and Voting
- **User Profile Access**: Accessible via the `/userProfile` route for user registration and candidate proposal submissions during registration.
- **Voting Process**: Post-registration, the `Ballot` contract becomes active for voting within the set timeframe. Proposals are fetched from the user profile contract and stored here to minimize transaction re-execution.

### User Verification
- **Integration with External Systems**: A dedicated Node server linked to a MySQL database manages the verification process.
- **Database Checks**: The database contains predefined user IDs and document numbers. During registration via the website, if a user's document number matches an entry in the database, registration proceeds; otherwise, access is denied, and the user is not registered.

### Post-Voting
- **Result Compilation**: After the voting period ends, the contract locks and the system is set to display the winning candidate.

## Enhancements Implemented

1. **Dynamic Contract Deployment**: Enables direct UI-based contract deployment, with automatic fetching of ABI and bytecode.
2. **UserProfile Contract**: A new contract for managing user data and candidate registration.
3. **Real-Time Voting Analysis**: Enables live tracking of voting activities.
4. **Extended Chairperson Controls**: Includes time management and candidate limits.
5. **Candidate Self-Nomination**: Allows users to register as candidates and propose their initiatives during the designated registration period.
6. **Identity Verification**: Restricts voting to registered users within the allotted time.
7. **Tie Resolution in Winning Proposal**: If the number of votes is the same for two or more proposals, we display all the winners.
8. **Interactive UI**: Designed an interactive UI in React.js.
9. **Sepolia Testnet Deployment**: Successfully deployed the contract on the Sepolia testnet.

## Installation and Setup

To set up and run the Blockchain Voting System on your local machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/iabhi4/Blockchain-Based-Voting-System.git

2. Move to the `voting-frontend` folder by using the command `cd voting-frontend`
3. Install dependencies:
   npm install

4. Compile the contracts using the command `truffle compile`

5. Start Ganache and ensure it's running in the background.

6. Connect your MetaMask wallet to the local network and import accounts from Ganache.
7. Setup mySQL locally with a table `verification` with two columns `id` and `document number` which will act as a dummy database (make sure to use `nvm install mysql2` in the verification folder; make sure to configures `server.js` in verification directory according to your local mySQL Configuration).
8. Start the mySQL server.
9. Move to the verification directory and npm install axios, cors, web3.
10. Start the front end using the command `npm run dev`

11. Deploy the smart contracts using the UI provided within the project using the `/` route.

12. Run the frontend application:
   npm start

## Technologies Used

- Ethereum for smart contracts
- Ganache for a local blockchain environment
- Web3.js for Ethereum blockchain interaction
- React.js and tailwind CSS for frontend development

## GitHub Link to the DApp: https://github.com/iabhi4/Blockchain-Based-Voting-System.git

Feel free to dive into the project, test the functionalities, and push improvements or bug fixes. If you encounter any issues or have suggestions, don't hesitate to contact or contribute directly to the repo.

---
