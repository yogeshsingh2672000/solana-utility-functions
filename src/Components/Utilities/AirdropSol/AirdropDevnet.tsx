import { useState } from 'react';
import { airdrop } from '../../../RpcApi/Utilities';

export default function AirdropSol() {
    const [loading, setLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e: any) => {
        setWalletAddress(e.target.value);
    }
    const handleClick = () => {
        setLoading(true)
        airdrop(walletAddress).then(() => {
            setMessage("2 Sol Credited")
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        });
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-[#1F2937] text-center">
                    <div className="py-3 px-6 border-b border-gray-300 text-white">
                        Airdop 2 Sol in Devnet
                    </div>
                    <div className="p-6">
                        <input type="text" onChange={handleChange} value={walletAddress} className="w-[300px] bg-[#374151] rounded form-control block w-full px-3 py-1.5 mb-3 text-base font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none" />
                    </div>
                    <div className="p-4">
                        <p className="text-white text-base mb-4">
                            {message ? message : ""}
                        </p>
                        <button onClick={handleClick} disabled={loading} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Airdop 2 Sol</button>
                    </div>
                </div>
            </div>
        </>
    )
}
