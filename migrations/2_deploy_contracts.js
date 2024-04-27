const Ballot = artifacts.require("Ballot");
const UserProfile = artifacts.require("UserProfile");

module.exports = async function (deployer) {
  // Deploy UserProfile contract
  await deployer.deploy(UserProfile);
  const userProfileInstance = await UserProfile.deployed();

  // Deploy Ballot contract and pass the address of the UserProfile contract
  await deployer.deploy(Ballot, ["Proposal1", "Proposal2"], userProfileInstance.address);
};