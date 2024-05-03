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
    const contractAddress = localStorage.getItem('userProfileAddress'); // Replace with your contract address
    const contractAbi = userProfileJson.abi; // Replace with your contract ABI
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    // Get registration time period from localStorage or contract
    let registrationTimePeriod = localStorage.getItem('registrationTimePeriod');
    if (!registrationTimePeriod) {
        registrationTimePeriod = await contract.methods.getRegistrationTimePeriod().call();
        localStorage.setItem('registrationTimePeriod', registrationTimePeriod);
    }

    // Convert registrationTimePeriod to a JavaScript Date object
    const registrationEndTime = new Date(registrationTimePeriod * 1000);
    const currentTime = new Date();

    // Check if registration period has ended
    if (currentTime > registrationEndTime) {
        disableFormAndButton();
        displayRegistrationClosedMessage();
    } else {
        // Enable form fields and submit button
        enableFormAndButton();
        displayRegistrationTimeLeft(registrationEndTime);
    }

    // Add event listener to registration form
    document
        .getElementById("registrationForm")
        .addEventListener("submit", async (event) => {
            event.preventDefault();
            // Get form data
            const formData = new FormData(event.target);
            const name = formData.get("name");
            const age = formData.get("age");
            const documentNumber = formData.get("documentNumber");
            const residence = formData.get("residence");
            const isCandidate = formData.get("isCandidate");
            const proposalName = formData.get("proposalName");

            // Call smart contract function to register user profile
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                const userAddress = accounts[0];
                console.log(userAddress);
                await contract.methods
                    .registerUserProfile(name, age, documentNumber, residence, isCandidate === "yes", proposalName)
                    .send({ from: userAddress });
                alert("User profile registered successfully!");
                disableFormAndButton();
            } catch (error) {
                console.error(error);
                alert("Failed to register user profile. Please try again.");
            }
        });
});

function disableFormAndButton() {
    const form = document.getElementById("registrationForm");
    const submitButton = form.querySelector("input[type='submit']");
    form.reset(); // Clear form inputs
    form.querySelectorAll("input, select").forEach(input => {
        input.disabled = true; // Disable form inputs
    });
    submitButton.disabled = true; // Disable submit button
}

function enableFormAndButton() {
    const form = document.getElementById("registrationForm");
    const submitButton = form.querySelector("input[type='submit']");
    form.querySelectorAll("input, select").forEach(input => {
        input.disabled = false; // Enable form inputs
    });
    submitButton.disabled = false; // Enable submit button
}

function displayRegistrationClosedMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Registration Time is closed. Go to Ballot to vote for your favorite proposal.";
    document.body.appendChild(messageDiv);
}

function displayRegistrationTimeLeft(registrationEndTime) {
    const currentTime = new Date();
    const timeLeft = Math.floor((registrationEndTime - currentTime) / 1000); // in seconds

    const timeLeftDiv = document.createElement("div");
    timeLeftDiv.textContent = `Registration closes in ${formatTimeLeft(timeLeft)}.`;
    document.body.appendChild(timeLeftDiv);
}

function formatTimeLeft(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds`;
}

function toggleProposalField() {
    const isCandidate = document.getElementById("isCandidate").value;
    const proposalField = document.getElementById("proposalField");

    if (isCandidate === "yes") {
        proposalField.style.display = "block";
    } else {
        proposalField.style.display = "none";
    }
}