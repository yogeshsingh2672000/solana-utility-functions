import AirdropSol from "./AirdropSol/AirdropDevnet";
import GetBalance from "./GetBalance/GetBalance";
import Background from "../../assets/background.mp4"

export default function Utilities() {
    return (
        // <>
        //     <div className="relative rounded-xl overflow-auto p-8">
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
                        className="z-30 flex justify-evenly ml-12 w-5/12"
                    >
                        <GetBalance />
                        <AirdropSol />
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
                {/* <div className="grid grid-cols-3 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">

                </div> */}
            </div>
        </>
    )
}

