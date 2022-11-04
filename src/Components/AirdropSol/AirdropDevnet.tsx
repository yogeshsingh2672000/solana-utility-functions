import { useState } from 'react';
import { airdrop } from '../../Utility/Utilities';
import Spinner from '../Spinner/Spinner';

export default function AirdropSol() {
    const [loading, setLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    const handleChange = (e: any) => {
        setWalletAddress(e.target.value);
    }
    const handleClick = () => {
        setLoading(true)
        airdrop(walletAddress).then(() => {
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        });
    }
    return (
        <>
            <div className="flex justify-center mt-8 text-lg">
                <div className="mb-3 xl:w-96">
                    <label className="form-label inline-block mb-2 text-white font-bold">
                        Enter Wallet Address
                    </label>
                    <input type="text" onChange={handleChange} value={walletAddress} className=" form-control block w-full px-3 py-1.5 mb-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    <button onClick={handleClick} disabled={loading} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xl leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Airdrop 2 Sol
                    </button>
                </div>
            </div>
            {loading ? <Spinner /> : ""}

        </>
    )
}
