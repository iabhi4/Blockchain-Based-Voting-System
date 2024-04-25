// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        string name;
        uint256 age;
        string documentNumber;
        string residence;
    }

    mapping(address => Profile) public profiles;

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
            bytes(profiles[msg.sender].name).length == 0,
            "User profile already exists"
        );

        // Register user profile
        profiles[msg.sender] = Profile(
            _name,
            _age,
            _documentNumber,
            _residence
        );

        // Emit an event
        emit ProfileRegistered(
            msg.sender,
            _name,
            _age,
            _documentNumber,
            _residence
        );
    }
}
