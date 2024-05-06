pragma solidity >=0.7.0 <0.9.0;
import "./UserProfile.sol";

contract Ballot {
    //Defining an event log
    event Log(string message);

    // This declares a new complex type which will
    // be used for variables later.
    // It will represent a single voter.
    struct Voter {
        address userAddress;
        uint weight; // weight is accumulated by delegation
        bool voted; // if true, that person already voted
        address delegate; // person delegated to
        uint vote; // index of the voted proposal
    }

    struct Chairperson {
        address chairpersonAddress;
        uint registrationTime;
        uint votingTime;
        uint numberOfCandidates;
    }

    // This is a type for a single proposal.
    struct Proposal {
        string name; // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    Chairperson public chairpersonDetails;

    // This declares a state variable that
    // stores a `Voter` struct for each possible address.
    Voter[] public voters;

    // A dynamically-sized array of `Proposal` structs.
    Proposal[] public proposals;

    bool public proposalsFetched;

    address public ballotContractAddress;

    /// Create a new ballot to choose one of `proposalNames`.
    constructor(
        uint registrationTime,
        uint votingTime,
        uint numberOfCandidates,
        address userProfileContractAddress
    ) {
        chairpersonDetails = Chairperson({
            chairpersonAddress: msg.sender,
            registrationTime: registrationTime,
            votingTime: votingTime,
            numberOfCandidates: numberOfCandidates
        });

        ballotContractAddress = address(this);
        /*chairperson = msg.sender;
        voters.push(
            Voter({
                userAddress: msg.sender,
                weight: 1,
                voted: false,
                delegate: address(0),
                vote: 0
            })
        );*/

        // Set the address of the UserProfile contract
        userProfile = UserProfile(userProfileContractAddress);

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        /*for (uint i = 0; i < proposalNames.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            proposals.push(
                Proposal({name: string(proposalNames[i]), voteCount: 0})
            );
        }*/
        emit Log("Starting to deploy contract");
    }

    UserProfile public userProfile;

    // Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    /*function giveRightToVote(address voter) external {
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(!voters[voter].voted, "The voter already voted.");
        require(voters[voter].weight == 0);
        voters.push(
            Voter({weight: 1, voted: false, delegate: address(0), vote: 0})
        );
    }*/

    /// Delegate your vote to the voter `to`.
    function delegate(address to) public {
        emit Log("Trying to delegate");
        uint voterIndex = getVoterByAddress(msg.sender);
        Voter storage sender = voters[voterIndex];
        require(sender.weight != 0, "You have no right to vote");
        require(!sender.voted, "You already voted.");

        require(to != msg.sender, "Self-delegation is disallowed.");

        // Forward the delegation as long as
        // `to` also delegated.
        // In general, such loops are very dangerous,
        // because if they run too long, they might
        // need more gas than is available in a block.
        // In this case, the delegation will not be executed,
        // but in other situations, such loops might
        // cause a contract to get "stuck" completely.
        while (voters[getVoterByAddress(to)].delegate != address(0)) {
            to = voters[getVoterByAddress(to)].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }
        bool voterExists = checkVoterExists(to);
        if (!voterExists) {
            initializeVoter(to);
        }
        Voter storage delegate_ = voters[getVoterByAddress(to)];

        // Voters cannot delegate to accounts that cannot vote.
        require(delegate_.weight >= 1);

        // Since `sender` is a reference, this
        // modifies `voters[msg.sender]`.
        sender.voted = true;
        sender.delegate = to;

        if (voters[getVoterByAddress(to)].voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            proposals[voters[getVoterByAddress(to)].vote].voteCount += sender
                .weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate_.weight += sender.weight;
        }
    }

    /// Give your vote (including votes delegated to you)
    /// to proposal `proposals[proposal].name`.
    function vote(uint proposal) public {
        emit Log("Trying to vote");
        uint voterIndex = getVoterByAddress(msg.sender);
        Voter storage sender = voters[voterIndex];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = bool(true);
        sender.vote = uint(proposal);

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningProposals() public view returns (uint[] memory) {
        uint winningVoteCount = 0;
        uint[] memory winningProposals_;
        uint count = 0;

        // Find the highest number of votes
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
            }
        }

        // Count the number of proposals with the highest number of votes
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount == winningVoteCount) {
                count++;
            }
        }

        // Store the indices of winning proposals in the winningProposals_ array
        winningProposals_ = new uint[](count);
        count = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount == winningVoteCount) {
                winningProposals_[count] = p;
                count++;
            }
        }
        return winningProposals_;
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() external view returns (string memory winnerNames_) {
        uint[] memory winningIndices = winningProposals();
        if (winningIndices.length == 1) {
            winnerNames_ = proposals[winningIndices[0]].name;
        } else {
            // Construct winner names string with comma separation
            for (uint i = 0; i < winningIndices.length; i++) {
                if (i == 0) {
                    winnerNames_ = proposals[winningIndices[i]].name;
                } else {
                    winnerNames_ = string(
                        abi.encodePacked(
                            winnerNames_,
                            ", ",
                            proposals[winningIndices[i]].name
                        )
                    );
                }
            }
        }
        return winnerNames_;
    }

    function checkEligibilityToVote(
        address userAddress
    ) public view returns (bool) {
        require(
            address(userProfile) != address(0),
            "UserProfile contract address not set"
        );
        return userProfile.checkUserExists(userAddress);
    }

    function getProposals() public view returns (string[] memory) {
        string[] memory proposalNames = new string[](proposals.length);
        for (uint i = 0; i < proposals.length; i++) {
            proposalNames[i] = proposals[i].name;
        }
        return proposalNames;
    }

    function hasVoted(address user) public view returns (bool) {
        uint voterIndex = getVoterByAddress(user);
        return voters[voterIndex].voted;
    }

    function initializeVoter(address user) public {
        voters.push(
            Voter({
                userAddress: user,
                weight: 1,
                voted: false,
                delegate: address(0),
                vote: 0
            })
        );
    }

    function fetchProposals() public {
        // Check if proposals have already been fetched
        if (proposals.length == 0) {
            string[] memory proposalNames = userProfile.getProposals();
            for (uint i = 0; i < proposalNames.length; i++) {
                Proposal memory newProposal = Proposal({
                    name: proposalNames[i],
                    voteCount: 0
                });
                proposals.push(newProposal);
            }
        }
    }

    function getVoterByAddress(
        address _address
    ) public view returns (uint index) {
        for (uint i = 0; i < voters.length; i++) {
            if (_address == voters[i].userAddress) {
                return i;
            }
            /*if (voters[i].delegate == _address) {
                return voters[i];
            }*/
        }
    }

    function checkVoterExists(address user) public view returns (bool) {
        for (uint i = 0; i < voters.length; i++) {
            if (user == voters[i].userAddress) {
                return true;
            }
        }
        return false;
    }

    function getChairpersonDetails() public view returns (Chairperson memory) {
        return chairpersonDetails;
    }

    function votersCount() public view returns (uint) {
        return voters.length;
    }

    function proposalsCount() public view returns (uint) {
        return proposals.length;
    }

    function getVoter(uint i) public view returns (Voter memory) {
        return voters[i];
    }

    function getProposal(uint i) public view returns (Proposal memory) {
        return proposals[i];
    }

    function getVotingTime() public view returns (uint) {
        return chairpersonDetails.votingTime;
    }

    function getRegistrationTime() public view returns (uint) {
        return chairpersonDetails.registrationTime;
    }

    function getNumberOfCandidates() public view returns (uint) {
        return chairpersonDetails.numberOfCandidates;
    }

    function getContractAddress() public view returns (address) {
        return ballotContractAddress;
    }

    function isProposalFetched() public view returns (bool) {
        return proposalsFetched;
    }
}
