const Ballot = artifacts.require("Ballot");
const UserProfile = artifacts.require("UserProfile");

module.exports = function (deployer) {
  deployer.deploy(Ballot, ["Proposal1", "Proposal2", "Proposal3"]);
  deployer.deploy(UserProfile);
};
