pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        address userAddress;
        string name;
        uint256 age;
        string documentNumber;
        string residence;
        bool eligibleToVote; // New parameter
    }

    Profile[] public profiles;

    event ProfileRegistered(
        address indexed userAddress,
        string name,
        uint256 age,
        string documentNumber,
        string residence,
        bool eligibleToVote
    );

    // Function to register a user profile
    function registerUserProfile(
        string memory _name,
        uint256 _age,
        string memory _documentNumber,
        string memory _residence
    ) public {
        // Register user profile
        Profile memory newProfile = Profile(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence,
            false
        );
        profiles.push(newProfile);

        // Emit an event
        emit ProfileRegistered(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence,
            false
        );
        //isEligibleToVote(msg.sender);
    }

    function isEligibleToVote(
        address userAddress
    ) external view returns (bool) {
        return true;
    }

    // Function to check if a user is eligible to vote
    /*function isEligibleToVote(address userAddress) external returns (bool) {
        // Implement logic to check government ID through API
        // If government ID is valid, set eligibleToVote to true
        // For now, let's assume the eligibility check is successful
        for (uint256 i = 0; i < profiles.length; i++) {
            if (profiles[i].userAddress == userAddress) {
                profiles[i].eligibleToVote = true;
                return true;
            }
        }
        return false;
    }*/
}
