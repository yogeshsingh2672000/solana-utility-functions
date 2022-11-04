import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

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

export {
  airdrop
}