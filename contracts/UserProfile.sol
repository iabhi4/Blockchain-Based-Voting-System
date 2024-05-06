pragma solidity ^0.8.0;
import "./Ballot.sol";

contract UserProfile {
    struct Profile {
        address userAddress;
        string name;
        uint256 age;
        string documentNumber;
        string residence;
        bool eligibleToVote;
        bool isCandidate;
        string proposal; // Added proposal variable
    }

    Profile[] public profiles;

    uint public registrationTimePeriod;

    uint public maxCandidatesAllowed;

    int public currentCandidateCount = 0;

    string[] public proposalsList;

    constructor(uint registrationTime, uint maxCandidates) {
        registrationTimePeriod = registrationTime;
        maxCandidatesAllowed = maxCandidates;
    }

    event ProfileRegistered(
        address indexed userAddress,
        string name,
        uint256 age,
        string documentNumber,
        string residence,
        bool eligibleToVote,
        bool isCandidate,
        string proposal
    );

    // Function to register a user profile
    function registerUserProfile(
        string memory _name,
        uint256 _age,
        string memory _documentNumber,
        string memory _residence,
        bool _isCandidate,
        string memory _proposal // Added proposal parameter
    ) public {
        // Register user profile
        if (
            _isCandidate &&
            int(currentCandidateCount) < int(maxCandidatesAllowed)
        ) {
            proposalsList.push(_proposal);
            currentCandidateCount++;
        }
        Profile memory newProfile = Profile(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence,
            false,
            _isCandidate,
            _proposal // Set proposal value
        );
        profiles.push(newProfile);

        // Emit an event
        emit ProfileRegistered(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence,
            false,
            _isCandidate,
            _proposal // Emit proposal value
        );
    }

    function isEligibleToVote(
        address userAddress
    ) external view returns (bool) {
        return true;
    }

    function profilesCount() public view returns (uint256) {
        return profiles.length;
    }

    function getProfile(uint i) public view returns (Profile memory) {
        return profiles[i];
    }

    function checkUserExists(address userAddress) public view returns (bool) {
        for (uint i = 0; i < profiles.length; i++) {
            if (profiles[i].userAddress == userAddress) {
                return true;
            }
        }
        return false;
    }

    function getProposals() public view returns (string[] memory) {
        return proposalsList;
    }

    function getRegistrationTimePeriod() public view returns (uint) {
        return registrationTimePeriod;
    }

    function getMaxCandidatesAllowed() public view returns (uint) {
        return maxCandidatesAllowed;
    }

    function getCurrentCandidateCount() public view returns (int) {
        return currentCandidateCount;
    }
}
