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
