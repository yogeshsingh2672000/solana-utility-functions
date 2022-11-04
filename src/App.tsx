import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleChange = (e: any) => {
    setWalletAddress(e.target.value);
  }
  const handleClick = () => {
    airdrop(walletAddress);
  }

  const airdrop = async (address: string) => {
    const publicKey = new PublicKey(address);
    const network = "https://api.devnet.solana.com";
    const conn = new Connection(network, "confirmed");
    const tx = await conn.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);
    await conn.confirmTransaction(tx).then(() => {
      console.log("done")
      console.log("transaction: ", tx);
    })

  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={walletAddress} />
      <button onClick={handleClick}>Aridrop Sol</button>
    </div>
  );
}

export default App;
