const Ballot = artifacts.require("Ballot");
const UserProfile = artifacts.require("UserProfile");

let registerationTime;
let registerationTimeFormat;
let votingTime;
let votingTimeFormat;
let maxCandidates;

module.exports = async function (deployer) {
  global.initializeBallot = async function(regTime, regTimeFormat, voteTime, voteTimeFormat, maxCands) {
    // Set the values of the variables
    registerationTime = regTime;
    registerationTimeFormat = regTimeFormat;
    votingTime = voteTime;
    votingTimeFormat = voteTimeFormat;
    maxCandidates = maxCands;

    // Deploy UserProfile contract
    await deployer.deploy(UserProfile);
    const userProfileInstance = await UserProfile.deployed();

    // Deploy Ballot contract and pass the address of the UserProfile contract
    await deployer.deploy(Ballot, registerationTime, registerationTimeFormat, votingTime, votingTimeFormat, maxCandidates, userProfileInstance.address);
  };
};