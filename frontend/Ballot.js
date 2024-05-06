let contract;
let senderAddress;
let registrationTime;
window.addEventListener("load", async () => {
    // Initialize web3
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        return;
    }

    // Set up contract
    const contractAddress = localStorage.getItem('ballotAddress'); // Replace with your contract address
    const contractAbi = ballotJson.abi; // Replace with your contract ABI
    contract = new web3.eth.Contract(contractAbi, contractAddress);

    // Check user status
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const userAddress = accounts[0];
    console.log("User Address:", userAddress);
    /*const hasUserRegistered = await contract.methods
        .checkEligibilityToVote(userAddress)
        .call();
    if (!hasUserRegistered) {   
        disableBallotUI("You are not eligible to vote in this election.");
    }*/
    const voterExists = await contract.methods
        .checkVoterExists(userAddress)
        .call();
    if(!voterExists) {
        await contract.methods
        .initializeVoter(userAddress)
        .send({ from: userAddress });
    }
    const hasVoted = await contract.methods.hasVoted(userAddress).call();
    const userStatus = document.getElementById("userStatus");
    if (hasVoted) {
        //userStatus.textContent = `You have already voted.`;
        disableBallotUI("You have already voted.");
    } else {
        userStatus.textContent = `Click on one of the proposals to vote for them or you can also wish to delegate to someone else.`;
    }

    // Get registration and voting times
    registrationTime = await contract.methods.getRegistrationTime().call();
    const votingTime = await contract.methods.getVotingTime().call();

    const proposals = await contract.methods.getProposals().call();
    if(proposals.length != 0) {
        document.getElementById("fetchProposalsButton").style.display = "none";
    }
        const proposalsList = document.getElementById("proposalsList");
        proposals.forEach((proposal, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${proposal}`;
            proposalsList.appendChild(li);
        });

        // Populate vote options
        const voteOptions = document.getElementById("voteOptions");
        proposals.forEach((proposal, index) => {
            const button = document.createElement("button");
            button.textContent = `Vote for ${proposal}`;
            button.onclick = () => vote(index);
            voteOptions.appendChild(button);
        });

    // Convert Unix timestamps to JavaScript Date objects
    const currentTime = new Date();
    const registrationTimeDate = new Date(registrationTime * 1000);
    const votingTimeDate = new Date(votingTime * 1000);

    // Check current time against registration and voting times
    if (currentTime >= registrationTimeDate && currentTime < votingTimeDate) {
        // Ballot active
        enableBallotUI();
    } else if (currentTime >= votingTimeDate) {
        // Voting ended
        // Fetch winner here and pass that to diableBallotUI
        disableBallotUI("Voting has ended.");
    } else {
        // Voting will start after the Registration Period
        disableBallotUI("Voting will start after the Registration Period.");
    }
});

async function delegateVote() {
    const delegateAddress = document.getElementById("delegateAddress").value;
    const accounts = await web3.eth.getAccounts(); // Get the accounts from MetaMask
    senderAddress = accounts[0]; // Use the first account as the sender address

    await contract.methods
        .delegate(delegateAddress)
        .send({ from: senderAddress }); // Pass sender address as "from" option
    location.reload(); // Refresh page
}

async function vote(proposalIndex) {
    const accounts = await web3.eth.getAccounts(); // Get the accounts from MetaMask
    senderAddress = accounts[0]; // Use the first account as the sender address
    await contract.methods.vote(proposalIndex).send({ from: senderAddress }); // Pass sender address as "from" option
    location.reload(); // Refresh page
}

function enableBallotUI() {
    document.getElementById("delegateAddress").disabled = false;
    document.getElementById("delegateButton").style.display = "block";
    document.getElementById("fetchProposalsButton").style.display = "block";
    document.getElementById("voteOptions").querySelectorAll("button").forEach(button => {
        button.style.display = "block";
    });
}

function disableBallotUI(message) {
    document.getElementById("delegateAddress").disabled = true;
    document.getElementById("delegateButton").style.display = "none";
    document.getElementById("fetchProposalsButton").style.display = "none";
    document.getElementById("voteOptions").querySelectorAll("button").forEach(button => {
        button.style.display = "none";
    });
    document.getElementById("userStatus").textContent = message;
}

async function fetchProposals() {
    try {

        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            await ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
        } else {
            console.log(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
            return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        const userAddress = accounts[0];

        await contract.methods.fetchProposals().send({ from: userAddress, gas: '5000000' });

        // Fetch proposals
        const proposals = await contract.methods.getProposals().call();
        const proposalsList = document.getElementById("proposalsList");
        proposals.forEach((proposal, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${proposal}`;
            proposalsList.appendChild(li);
        });

        // Populate vote options
        const voteOptions = document.getElementById("voteOptions");
        proposals.forEach((proposal, index) => {
            const button = document.createElement("button");
            button.textContent = `Vote for ${proposal}`;
            button.onclick = () => vote(index);
            voteOptions.appendChild(button);
        });

        // Hide the fetch proposals button
        document.getElementById("fetchProposalsButton").style.display = "none";
    } catch (error) {
        console.error("Error fetching proposals:", error);
    }
}
