import React, {useState, useContext} from 'react'
import Navbar from './Navbar'
import { airdrop, getBalance } from '../utils/rpcAPIs'
import UserContext from '../context/userContext/UserContext';

function Playground() {
  const [userInput, setUserInput] = useState<any>({})
  const context = useContext(UserContext)
  const [message, setMessage] = useState<any>({})

  const handleAirdrop = async (wallet:string) => {
    if (!wallet || wallet.length < 39){
      setMessage({...message, airdrop: "Please input valid address!"})
      return
    } else{
      setMessage({...message, airdrop: ""})
    }
    try {
      await airdrop(wallet)
      setMessage({...message, airdrop: "2 Sol Credited 🎊"})
    } catch (e) {
      console.log()
    }
  }
  const handleGetBalance = async (wallet:string) => {
    if (!wallet || wallet.length < 39){
      setMessage({...message, balance: "Please input valid address!"})
      return
    } else{
      setMessage({...message, balance: ""})
    }
    try {
      const balance = await getBalance(wallet)
      setMessage({...message, balance: `${balance} Sol 🎊`})
    } catch (e) {
      console.log()
    }
  }

  const handleInput = (e:any, utility:string) => {
    const {value} = e.currentTarget
    if (utility === "airdrop") {
      setUserInput({...userInput, airdrop: value})
    } else {
      setUserInput({...userInput, balance: value})
    }
  }

  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-[10px] md:gap-[20px] py-[10px] px-[10px] md:py-[30px] md:px-[30px] lg:py-[50px] lg:px-[50px]'>
        {/* Airdrop 2 Sol */}
        <div className='bg-[#443C68] rounded-xl min-w-[350px] max-w-[400px]'>
          <div className="py-3 px-6 border-b border-gray-300 text-white">
              Airdop 2 Sol (Devnet)
          </div>
          <div className="p-6">
              <input value={userInput.airdrop} onChange={(e:any)=>handleInput(e, "airdrop")} placeholder='Solana Address' type="text" className="w-[300px] bg-transparent form-control block px-3 py-1.5 mb-3 text-base font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none" />
          </div>
          <div className="p-4">
              <p className="text-white text-base mb-4">
                  {message.airdrop ? message.airdrop : ""}
              </p>
              <button onClick={()=>handleAirdrop(userInput.airdrop)} type="button" className=" inline-block px-6 py-2.5 bg-gradient-to-r hover:scale-[1.10] transition-all duration-150 ease-out from-[#9C64EC] to-[#82CFF1] text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Airdop 2 Sol</button>
          </div>
        </div>
        {/* Get wallet balance */}
        <div className='bg-[#443C68] rounded-xl min-w-[350px] max-w-[400px]'>
          <div className="py-3 px-6 border-b border-gray-300 text-white">
              Fetch Sol balance (Devnet)
          </div>
          <div className="p-6">
              <input value={userInput.balance} onChange={(e:any)=>handleInput(e, "balance")} placeholder='Solana Address' type="text" className="w-[300px] bg-transparent form-control block px-3 py-1.5 mb-3 text-base font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none" />
          </div>
          <div className="p-4">
              <p className="text-white text-base mb-4">
                  {message.balance ? message.balance : ""}
              </p>
              <button onClick={()=>handleGetBalance(userInput.balance)} type="button" className=" inline-block px-6 py-2.5 bg-gradient-to-r from-[#9C64EC] to-[#82CFF1] hover:scale-[1.10] transition-all duration-150 ease-out text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Get balance</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground