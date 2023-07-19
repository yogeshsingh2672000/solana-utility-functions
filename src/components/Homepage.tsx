import React, {useContext} from 'react';
// @ts-ignore
import Background from '../assets/background.mp4';
import UserContext from '../context/userContext/UserContext';
import { connectToPhantom } from '../utils';
// @ts-ignore
import Phantom from '../assets/phantom.png'

function Homepage() {
    const context = useContext(UserContext)

    const handleLogin = async () => {
        try {
            const wallet = await connectToPhantom()
            context.setUser(wallet)
        } catch (e) {
            console.log(e)
        }
    }
  return (
    <>
        <div className="relative flex items-center justify-start h-fill top-[32px] md:top-[167px] lg:top-[238px]">
            <div className="z-10 text-white text-[14px] md:text-[18px] pl-[10px] w-1/2 lg:text-2xl">
                <p>Welcome to the Solana Utilities, a small project prepared by Yogesh Kumar. Just explore the common Solana RPC functions in a fun and attractive way. Hope you all like it! 😀</p>
                <div className='grid grid-cols-1 place-items-center text-white mt-[30px]'><button onClick={handleLogin} className='flex justify-center items-center gap-[10px] hover:scale-110 transition-all duration-150 ease-out bg-gradient-to-r from-[#9C64EC] to-[#82CFF1] px-[15px] py-[5px] rounded font-semibold tracking-wide'>Connect <img className='w-6 h-6' src={Phantom} alt="wallet" /></button></div>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute"
            >
                <source src={Background} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </>
  );
}

export default Homepage;
