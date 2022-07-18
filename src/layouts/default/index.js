import Image from "next/image";

import Credits from "@/components/Credits";
import Navbar from "@/components/Navbar";

export default function LayoutDefault({ children }) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full">{children}</div>
            <div className="p-16 absolute w-full h-screen justify-between flex-col flex pointer-events-none">
                <div className="flex justify-between">
                    <div>
                        <div className=" font-mono"><span className="text-purple-800 text-4xl">Ei</span><span className="text-2xl">Lab</span></div>
                        <div>
                            Subject #1
                        </div>
                    </div>
                    <Navbar />
                </div>
                <footer className="flex justify-between items-end">
                    <div>v0.1.0 development</div>
                    <div>
                        <Credits />
                    </div>
                </footer>
            </div>
        </>
    );
}
