const ballotABI = ballotJson.abi;
const ballotBytecode = ballotJson.bytecode;

const userProfileABI = userProfileJson.abi;
const userProfileBytecode = userProfileJson.bytecode;

async function deployContracts() {
  let registerationTime = parseInt(
    document.getElementById('registerationTime').value
  );
  const registerationTimeFormat = document.getElementById(
    'registerationTimeFormat'
  ).value;
  let votingTime = parseInt(document.getElementById('votingTime').value);
  const votingTimeFormat = document.getElementById('votingTimeFormat').value;
  const maxCandidates = parseInt(
    document.getElementById('maxCandidates').value
  );

  // Convert registration and voting times to seconds
  registerationTime = convertToSeconds(
    registerationTime,
    registerationTimeFormat
  );
  votingTime = convertToSeconds(votingTime, votingTimeFormat);

  // Calculate current Unix timestamp
  const currentDate = Math.floor(Date.now() / 1000);

  // Add registration time to current time to get registration end time
  const registrationEndTime = currentDate + registerationTime;

  // Add voting time to registration end time to get voting end time
  const votingEndTime = registrationEndTime + votingTime;

  // Deploy contracts
  const web3 = new Web3(
    new Web3.providers.HttpProvider('http://127.0.0.1:7545')
  );
  const accounts = await web3.eth.getAccounts();
  const chairperson = accounts[0];

  const userProfileContract = new web3.eth.Contract(userProfileABI);
  const userProfileDeployed = await userProfileContract
    .deploy({
      data: userProfileBytecode,
      arguments: [registrationEndTime, maxCandidates],
    })
    .send({
      from: chairperson,
      gas: '3000000',
    });

  const ballotContract = new web3.eth.Contract(ballotABI);
  const ballotDeployed = await ballotContract
    .deploy({
      data: ballotBytecode,
      arguments: [
        registrationEndTime,
        votingEndTime,
        maxCandidates,
        userProfileDeployed.options.address,
      ],
    })
    .send({
      from: chairperson,
      gas: '3000000',
    });

  // Store contract addresses and times in local storage
  localStorage.setItem(
    'userProfileAddress',
    userProfileDeployed.options.address
  );
  localStorage.setItem('ballotAddress', ballotDeployed.options.address);
  localStorage.setItem('registrationEndTime', registrationEndTime);
  localStorage.setItem('votingEndTime', votingEndTime);
  localStorage.setItem('maxCandidates', maxCandidates);

  // Disable input fields and display contract addresses
  disableForm();
  displayContractAddresses(
    userProfileDeployed.options.address,
    ballotDeployed.options.address
  );
  showLoadButton(ballotDeployed.options.address);
}

function convertToSeconds(time, format) {
  switch (format) {
    case 'days':
      return time * 24 * 60 * 60;
    case 'hours':
      return time * 60 * 60;
    case 'minutes':
      return time * 60;
    default:
      return time;
  }
}

function disableForm() {
  document.getElementById('registerationTime').disabled = true;
  document.getElementById('registerationTimeFormat').disabled = true;
  document.getElementById('votingTime').disabled = true;
  document.getElementById('votingTimeFormat').disabled = true;
  document.getElementById('maxCandidates').disabled = true;
  document.getElementById('deployButton').disabled = true;
}

function displayContractAddresses(userProfileAddress, ballotAddress) {
  document.getElementById('userProfileAddress').textContent =
    'UserProfile: ' + userProfileAddress;
  document.getElementById('ballotAddress').textContent =
    'Ballot: ' + ballotAddress;
  document.getElementById('contractModal').style.display = 'block';
}

window.onload = function () {
  const userProfileAddress = localStorage.getItem('userProfileAddress');
  const ballotAddress = localStorage.getItem('ballotAddress');

  if (userProfileAddress && ballotAddress) {
    disableForm();
    displayContractAddresses(userProfileAddress, ballotAddress);
    document.getElementById('registerationTime').value =
      localStorage.getItem('registerationTime');
    document.getElementById('votingTime').value =
      localStorage.getItem('votingTime');
    document.getElementById('maxCandidates').value =
      localStorage.getItem('maxCandidates');
    showLoadButton(ballotAddress);
  }
};

function showLoadButton(ballotAddress) {
  const loadButton = document.getElementById('loadBallotButton');
  loadButton.style.display = 'block';

  // Add event listener to load the ballot when clicked
  loadButton.addEventListener('click', function () {
    // Redirect to ballot.html
    window.location.href = 'ballot.html';
  });
}
