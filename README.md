# ☕ Web3 "Buy Me a Coffee" DApp

A full-stack decentralized application that allows users to support creators by "buying them a coffee" via a smart contract. Built with **Next.js**, **Tailwind CSS**, and **TypeScript**, and powered by **Ethereum-compatible smart contracts**.

---

## 📌 Features

- 🔐 **Wallet Connect** (via `wagmi` and `viem`)
- ☕ **Buy Coffee** – Send ETH to the contract, 
  - call a function on the smart contract, 
  - have a test blockchain to call
- 💰 **Check Balance** – View how much coffee money has been received
- 🏧 **Withdraw** – Owner can withdraw collected ETH

---

## 🛠️ Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Frontend     | Next.js, TypeScript, Tailwind CSS |
| Web3 Library | wagmi, viem                       |
| Backend/API  | Next.js API Routes (optional)     |
| Smart Contract | Solidity (EVM-compatible)       |
| Dev Tools    | Hardhat, Ethers.js, MetaMask      |

---

## 🔗 Smart Contract Overview
The core smart contract supports:

buyCoffee(string message) — payable function to send ETH

getBalance() — view contract balance

withdraw() — onlyOwner can withdraw funds

getSupporters() — view supporters list

You can find the contract in the contracts/ directory. It’s deployed on the Sepolia testnet (TBD).


## 📷 UI Preview
Add a screenshot or short GIF of the app here once UI is ready.


## 🤓 Developer Notes
This project integrates modern Web3 practices with a polished frontend UI. Emphasis on:

- Type safety with TypeScript

- Clean component architecture

- Smart contract interaction using wagmi/viem


----

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
