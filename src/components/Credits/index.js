// Next.js
import Image from "next/image";

export default function Credits() {
    return (
        <div>
            <div className="text-center font-semibold opacity-50 text-md text-black">
                from
            </div>
            <div className="flex items-center gap-2">
                <div className="h-[40px]">
                    <Image
                        alt="Avixy Logo"
                        width={40}
                        height={40}
                        src={"/assets/images/Avixy Logo.png"}
                    />
                </div>
                <div>
                    <div className="font-bold text-2xl text-black pt-1">
                        AVIXY
                    </div>
                    <sup>Laboratory</sup>
                </div>
            </div>
        </div>
    );
}
