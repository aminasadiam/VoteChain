# VoteChain Project Checklist

## Phase 1: Setup & Initialization

- [ ] Create GitHub repository and clone
- [ ] Set up directory structure: contracts/, src/api/, src/web/, src/tests/, docker/, .github/workflows/
- [ ] Add .gitignore and initial README.md
- [ ] Install dependencies: npm for contracts, npm for src/web, go mod for src/api
- [ ] Configure hardhat.config.js, next.config.mjs, tsconfig.json

## Phase 2: Smart Contract Development

- [ ] Write Voting.sol with Voter/Proposal structs, vote, getResults functions
- [ ] Create deploy.js script for Hardhat
- [ ] Write tests in Voting.test.js (at least 3-4 tests)
- [ ] Test locally with npx hardhat test
- [ ] Deploy contract to Sepolia testnet
- [ ] Save contract address for use in backend/frontend

## Phase 3: Backend Development (Go)

- [ ] Set up main.go with Gin server
- [ ] Implement blockchain/voting.go for contract interaction using go-ethereum
- [ ] Write handlers/voting.go for /vote and /results endpoints
- [ ] Define models/types.go for Proposal and Voter structs
- [ ] Write unit tests in tests/api/voting_test.go
- [ ] Test API locally with go run src/api/main.go

## Phase 4: Frontend Development (TypeScript/Next.js)

- [ ] Create pages: index.tsx, vote/[id].tsx, results.tsx
- [ ] Build components: WalletConnect.tsx, ProposalList.tsx
- [ ] Implement blockchain.ts for contract interaction with ethers.js
- [ ] Add Tailwind CSS in styles/globals.css
- [ ] Define types in types/index.ts
- [ ] Write unit tests in tests/web/WalletConnect.test.tsx
- [ ] Test frontend locally with npm run dev

## Phase 5: Dockerization & Integration

- [ ] Write Dockerfile.api for backend
- [ ] Write Dockerfile.web for frontend
- [ ] Create docker-compose.yml for running api and web
- [ ] Test integration with docker-compose up

## Phase 6: CI/CD & Finalization

- [ ] Create .github/workflows/ci.yml for GitHub Actions
- [ ] Update README.md with setup instructions, screenshots, and demo link
- [ ] Push to GitHub and verify CI/CD pipeline
