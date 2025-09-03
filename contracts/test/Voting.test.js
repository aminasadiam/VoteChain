const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
  let Voting, voting, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
    const proposals = ["Candidate A", "Candidate B"];
    const durationMinutes = 10; // 10 minutes for testing
    voting = await Voting.deploy(proposals, durationMinutes);
    await voting.waitForDeployment();
  });

  it("Should register a voter", async function () {
    await voting.registerVoter(addr1.address);
    expect(await voting.voters(addr1.address).registered).to.be.true;
  });

  it("Should allow voting and update count", async function () {
    await voting.registerVoter(addr1.address);
    await voting.connect(addr1).vote(0);
    expect((await voting.proposals(0)).voteCount).to.equal(1);
    expect((await voting.voters(addr1.address)).voted).to.be.true;
  });

  it("Should prevent double voting", async function () {
    await voting.registerVoter(addr1.address);
    await voting.connect(addr1).vote(0);
    await expect(voting.connect(addr1).vote(1)).to.be.revertedWith(
      "Already voted"
    );
  });

  it("Should end voting and allow results", async function () {
    await voting.registerVoter(addr1.address);
    await voting.connect(addr1).vote(0);
    await ethers.provider.send("evm_increaseTime", [600]); // Fast-forward 10 minutes
    await voting.endVoting();
    const results = await voting.getResults();
    expect(results[0].voteCount).to.equal(1);
  });
});
