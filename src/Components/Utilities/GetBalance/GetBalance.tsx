import { useState, useEffect } from 'react';
import { getBalance } from '../../../RpcApi/Utilities';
import SuccessMessaage from '../../SuccessMessage/SuccessMessaage';

function GetBalance() {
    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] = useState<null | number>(null);
    const [messageStatus, setMessageStatus] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: any) => {
        setWalletAddress(e.target.value);
    }

    const handleClick = async () => {
        const res = await getBalance(walletAddress);
        setBalance(res);
        setMessageStatus(true);
    }
    useEffect(() => {
        setMessage(`${balance} SOL`);
        setTimeout(() => {
            setMessageStatus(false)
        }, 1200);
    }, [balance, messageStatus])

    return (
        <>
            <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-[#1F2937] max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300 text-white">
                        Fetch Balance
                    </div>
                    <div className="p-6">
                        <input type="text" onChange={handleChange} value={walletAddress} className="w-[300px] bg-[#374151] rounded form-control block w-full px-3 py-1.5 mb-3 text-base font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none" />
                    </div>
                    <div className="p-6">
                        <button onClick={handleClick} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Fetch Balance</button>
                    </div>
                </div>
            </div>
            {messageStatus ? <SuccessMessaage message={message} /> : ""}
        </>
    )
}

export default GetBalance