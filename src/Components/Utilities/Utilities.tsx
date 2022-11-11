import AirdropSol from "./AirdropSol/AirdropDevnet";
import GetBalance from "./GetBalance/GetBalance";

export default function Utilities() {
    return (
        <>
            <div className="relative rounded-xl overflow-auto p-8">
                <div className="grid grid-cols-3 gap-3 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
                    <GetBalance />
                    <AirdropSol />
                </div>
            </div>
        </>
    )
}

