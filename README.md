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


Blockchain Voting System
Welcome to the blockchain voting system project, a next-gen way to ensure secure and transparent voting, built using Ethereum smart contracts and React. This README is gonna walk you through what this project is all about, how it works, and what you need to get it running on your local machine.

Prerequisite
Before you dive into the project, make sure you have Ganache up and running. You don't need to worry about linking it to Truffle for this project, just make sure it's active.

Project Flow
Chairperson Screen
When you first boot up the project, you'll land on the chairperson screen. This is where the magic starts. Here, the chairperson sets three critical parameters:

Registration Time: The window during which users can register.
Voting Time: When users can cast their votes.
Maximum Candidates: The cap on how many candidates can register.
These parameters get stored in the Ballot contract and partially in the UserProfile contract to manage the UI functionalities once the registration time or candidate quota is met. For example, if it's 12:54 PM and the chairperson sets 2 minutes each for registration and voting, registration is open from 12:54 to 12:56 PM, and voting from 12:56 to 12:58 PM.

User Profile Screen
Navigate to /userProfile during the registration period. Here, users can register and, if desired, register as candidates to submit their proposals. If the maximum candidates limit is set to 2, only the first two users who register as candidates will be eligible.

Voting and Ballot Contract
Post-registration, the Ballot contract kicks into action. Access this via the /ballot route. You'll find a 'Fetch Proposals' button that pulls proposals from the UserProfile contract. This initializes the proposals array in the storage so we don't redo transactions needlessly. Once the proposals are set, users can vote. Their user status will update based on their actions. Remember, the button is disabled once the array is initialized to prevent re-fetching.

Post-Voting
Once voting ends, the Ballot contract locks down, and the system will later display the winner (I'll code this part at home later). Also, this is where you'd plug in the real-time voting analysis module.

Enhancements and Checks
Here's a checklist and enhancements made:

Contracts deployment from UI: DONE
New UserProfile contract: DONE
Candidate registration and proposal submission: DONE
Real-time voting analysis: DONE
Chairperson controls (time settings and candidate limits): DONE
Identity verification: Mostly done (need to uncomment some code tonight)
Tie in winningProposal(): In Progress
Interactive UI in React: Not started yet
