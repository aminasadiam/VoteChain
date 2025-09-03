// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Voting is Ownable {
    struct Voter {
        bool registered;
        bool voted;
        uint vote;
    }

    struct Proposal {
        string name;
        uint voteCount;
    }

    mapping(address => Voter) public voters;
    Proposal[] public proposals;
    uint public votingEndTime;
    bool public votingActive;

    event VoterRegistered(address voter);
    event Voted(address voter, uint proposal);
    event VotingEnded();

    constructor(string[] memory proposalNames, uint durationMinutes) {
        require(proposalNames.length > 1, "At least two proposals required");
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
        votingEndTime = block.timestamp + (durationMinutes * 1 minutes);
        votingActive = true;
    }

    function registerVoter(address _voter) external onlyOwner {
        require(!voters[_voter].registered, "Voter already registered");
        require(block.timestamp < votingEndTime, "Voting period has ended");
        voters[_voter].registered = true;
        emit VoterRegistered(_voter);
    }

    function vote(uint proposal) external {
        Voter storage sender = voters[msg.sender];
        require(sender.registered, "Voter not registered");
        require(!sender.voted, "Already voted");
        require(proposal < proposals.length, "Invalid proposal");
        require(block.timestamp < votingEndTime, "Voting period has ended");
        require(votingActive, "Voting is not active");

        sender.voted = true;
        sender.vote = proposal;
        proposals[proposal].voteCount += 1;
        emit Voted(msg.sender, proposal);
    }

    function endVoting() external onlyOwner {
        require(
            block.timestamp >= votingEndTime,
            "Voting period not ended yet"
        );
        require(votingActive, "Voting already ended");
        votingActive = false;
        emit VotingEnded();
    }

    function getResults() external view returns (Proposal[] memory) {
        require(!votingActive, "Voting is still active");
        return proposals;
    }

    function getProposalCount() external view returns (uint) {
        return proposals.length;
    }
}
