// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        address userAddress;
        string name;
        uint256 age;
        string documentNumber;
        string residence;
    }

    Profile[] private profiles;

    event ProfileRegistered(
        address indexed userAddress,
        string name,
        uint256 age,
        string documentNumber,
        string residence
    );

    function registerUserProfile(
        string memory _name,
        uint256 _age,
        string memory _documentNumber,
        string memory _residence
    ) public {
        // Check if user already has a profile
        require(
            profiles.length == 0 ||
                profiles[profiles.length - 1].userAddress != msg.sender,
            "User profile already exists"
        );

        // Register user profile
        Profile memory newProfile = Profile(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence
        );
        profiles.push(newProfile);

        // Emit an event
        emit ProfileRegistered(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence
        );
    }

    function getProfileCount() public view returns (uint256) {
        return profiles.length;
    }

    function getProfile(
        uint256 index
    )
        public
        view
        returns (address, string memory, uint256, string memory, string memory)
    {
        require(index < profiles.length, "Profile index out of bounds");
        Profile memory profile = profiles[index];
        return (
            profile.userAddress,
            profile.name,
            profile.age,
            profile.documentNumber,
            profile.residence
        );
    }
}
