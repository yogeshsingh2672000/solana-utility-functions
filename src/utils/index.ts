const connectToPhantom = async () => {
    if ((window as any).phantom) {
      const res = await (window as any).phantom.solana.connect();
      const wallet = JSON.stringify(res.publicKey);
      // @ts-ignore
      return wallet.replaceAll('"', "");
    } else {
      console.log("Phantom wallet is not installed");
    }
  };

  export { connectToPhantom }