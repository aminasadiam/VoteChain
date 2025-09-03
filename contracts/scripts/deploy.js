const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const Voting = await hre.ethers.getContractFactory("Voting");
  const proposals = ["Candidate A", "Candidate B", "Candidate C"];
  const durationMinutes = 1440; // 24 hours
  const voting = await Voting.deploy(proposals, durationMinutes);

  await voting.waitForDeployment();
  console.log("Voting contract deployed to:", await voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
