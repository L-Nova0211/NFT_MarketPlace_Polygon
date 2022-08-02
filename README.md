# NFT Marketplace

[![https://img.shields.io/badge/made%20with-hardhat-yellow](https://img.shields.io/badge/made%20with-hardhat-yellow)](https://hardhat.org/)
[![https://img.shields.io/badge/made%20with-nextjs-blue](https://img.shields.io/badge/made%20with-nextjs-blue)](https://nextjs.org/)

Made with NodeJS, Hardhat, Solidity, ReactJS, NextJS.

# Market basic actions

You can **create** (mint) new tokens, uploading their image and metadata on [IPFS](https://ipfs.io/) using [Pinata](https://www.pinata.cloud/).  
If you've created or bought an NFT, you may also **sell** it by setting a price and paying a listing fee.  
When **buying** an NFT, the price will be transferred to the seller and the listing fee to the NFT Marketplace owner.  
It's also possible to **cancel** a market item, transferring it back to the owner.

---


# How to run

- Copy `.env.local.example` to `.env.local` and fill it with environment variables
- Run `npm run node` to start a local EVM blockchain testnet
- Run `npm run setup` to deploy NFT and Marketplace contracts and perform some initial actions to the local blockchain
- Run `npm run dev` to start frontend application
- Make sure to use `Localhost 8545` as the Metamask's network
- Make sure to import local Account #0 and #1 into Metamask accounts.

# How to deploy

- Frontend is deployed automatically on `main` branch using Vercel's github integration
- Set ACCOUNT_PRIVATE_KEY in `.env.local` and send it some Polygon's Testnet [Matic](https://faucet.polygon.technology/) tokens
- Run `npm run deploy:mumbai` to deploy contracts to Polygon`s Testnet (Mumbai)
- Optional: do the same for ACCOUNT2_PRIVATE_KEY env and run `npm run setup-marketplace:mumbai` to setup the marketplace with existing tokens and sales.
- Run `npm run env` to update Vercel's environment variables with the new deployed contract addresses.\*
- Make sure to use `Polygon Testnet Mumbai` as Metamask's network

# How to install

- If the project has some issue with npm install command, please use following command.
npm install passport -f