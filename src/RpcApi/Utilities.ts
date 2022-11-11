import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

const network = "https://api.devnet.solana.com";
const conn = new Connection(network, "confirmed");
const airdrop = async (address: string) => {
    const publicKey = new PublicKey(address);
    const tx = await conn.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);
    await conn.confirmTransaction(tx).then(() => {
      console.log("done")
      console.log("transaction: ", tx);
    })
  }
const getBalance = async (address: any) => {
    const publicKey = new PublicKey(address);
    const tx = await conn.getBalance(publicKey, "confirmed");
    const balance = tx / LAMPORTS_PER_SOL;
    return balance
  }

export {
  airdrop,
  getBalance
}