import AirdropSol from "./AirdropSol/AirdropDevnet";
import GetBalance from "./GetBalance/GetBalance";
import Background from "../../assets/background.mp4"

export default function Utilities() {
    return (
        // <>
        //     <div className="relative rounded-xl overflow-auto p-8 bg-[#010001]">
        //         <div className="grid grid-cols-3 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
        //             <GetBalance />
        //             <AirdropSol />
        //         </div>
        //     </div>
        // </>
        <>
            <div className="relative rounded-xl overflow-auto">
                <header
                    className="relative flex items-center justify-left h-screen overflow-hidden"
                >
                    <div
                        className="z-30 flex text-white text-2xl justify-evenly ml-[120px] w-[650px]"
                    >
                        Welcome to the Solana Utilities a small project prepared by Yogesh Kumar just explore the common Solana RPC functions in a Fun and Attractive Way, Hope you all like it 😀
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute z-10 w-auto min-w-full min-h-full"
                    >
                        <source
                            src={Background}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </header>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 bg-[#010001]">
                <div className="text-white mb-12">
                    <h1 className="text-3xl">Commanly Used RPC Functions</h1>
                </div>
                <div className="grid grid-cols-3 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
                    <GetBalance />
                    <AirdropSol />
                    <div>Comming soon with more 😀</div>
                </div>
            </div>
        </>
    )
}

