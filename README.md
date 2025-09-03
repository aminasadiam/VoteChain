# VoteChain

A decentralized voting system built with Solidity, Go, and TypeScript/Next.js. Users can vote securely on the Ethereum blockchain (Sepolia testnet) with a Go backend for API interactions and a Next.js frontend for a seamless UI.

## Features

- Transparent and secure voting on Ethereum
- Backend API with Go for smart contract interactions
- Responsive frontend with Next.js, TypeScript, and MetaMask integration
- Dockerized for easy deployment
- CI/CD pipeline with GitHub Actions

## Tech Stack

- **Smart Contract**: Solidity, Hardhat, OpenZeppelin
- **Backend**: Go, go-ethereum, Gin
- **Frontend**: TypeScript, Next.js, ethers.js, Tailwind CSS
- **DevOps**: Docker, GitHub Actions

## Prerequisites

- Node.js (>=16)
- Go (>=1.20)
- Docker (optional, for containerized deployment)
- MetaMask wallet
- Infura API key for Sepolia testnet

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aminasadiam/VoteChain
   cd VoteChain
   ```
2. **Smart Contract**:
   - Navigate to `contracts/`:
     ```bash
     cd contracts
     npm install
     ```
   - Configure `hardhat.config.js` with your Infura API key and wallet private key.
   - Deploy to Sepolia:
     ```bash
     npx hardhat run scripts/deploy.js --network sepolia
     ```
   - Save the deployed contract address.
3. **Backend**:
   - Navigate to `src/`:
     ```bash
     cd src
     go mod tidy
     ```
   - Set environment variable for Ethereum node:
     ```bash
     export ETHEREUM_NODE_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
     ```
   - Run the API:
     ```bash
     go run api/main.go
     ```
4. **Frontend**:
   - Navigate to `src/web/`:
     ```bash
     cd src/web
     npm install
     ```
   - Update `lib/blockchain.ts` with the deployed contract address.
   - Run the frontend:
     ```bash
     npm run dev
     ```
5. **Docker (optional)**:
   - Build and run with Docker Compose:
     ```bash
     docker-compose -f docker/docker-compose.yml up
     ```

## Usage

1. Open the frontend (http://localhost:3000).
2. Connect your MetaMask wallet to Sepolia testnet.
3. View available voting proposals, cast your vote, and check results in real-time.

## Testing

- **Smart Contract**: `cd contracts && npx hardhat test`
- **Backend**: `cd src && go test ./tests/api/...`
- **Frontend**: `cd src/web && npm test`

## Project Structure

```
VoteChain/
├── contracts/          # Solidity smart contracts
├── src/                # Backend (api/) and Frontend (web/)
├── docker/             # Dockerfiles and docker-compose.yml
├── .github/workflows/  # CI/CD pipeline
├── README.md           # Project documentation
└── .gitignore
```

## Demo

[Live Demo](https://your-vercel-link.vercel.app) _(Update with deployed link if available)_

## Screenshots

_(Add screenshots of the UI here, e.g., voting page, results page)_

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Submit a pull request with your changes.

## License

MIT License

## Contact

- GitHub: [aminasadiam](https://github.com/aminasadiam)
- Twitter: [aminasadiam](https://twitter.com/aminasadiam)
- Email: [adoramdev@gmail.com](mailto:adoramdev@gmail.com)
