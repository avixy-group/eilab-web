// Redux
import { useDispatch, useSelector } from "react-redux";
import { sendCommand } from "@/store/actions/shellAction";

// React
import { useEffect, useRef } from "react";

// Antd Icons
import { RightSquareOutlined } from "@ant-design/icons";

// Components
import Credits from "@/components/Credits";
import Navbar from "@/components/Navbar";

export default function LayoutDefault({ children }) {
    const bottomRef = useRef(null);
    const input = useRef(null);

    // Redux
    const dispatch = useDispatch();
    const { shell } = useSelector((state) => state);

    const handleShell = (e) => {
        // check if enter key
        if (e.key === "Enter") {
            dispatch(sendCommand(e.target.value));
            e.target.value = "";
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [shell.body]);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full">{children}</div>
            <div className="p-16 absolute w-full h-screen justify-between flex-col flex pointer-events-none">
                <div className="flex justify-between">
                    <div>
                        <div className=" font-mono">
                            <span className="text-purple-800 text-4xl">Ei</span>
                            <span className="text-2xl">Lab</span>
                        </div>
                        <div>Subject #1</div>
                    </div>
                    <Navbar />
                </div>
                <footer className="flex justify-between items-end">
                    <div className="pointer-events-auto">
                        <div className="w-96 text-sm max-h-96 overflow-auto">
                            <div
                                dangerouslySetInnerHTML={{ __html: shell.body }}
                                className="w-full"
                            />
                            <div ref={bottomRef} />
                        </div>
                        <div className="flex items-center">
                            <RightSquareOutlined className="mr-1 text-lg p-1 pl-0" />
                            <input
                                ref={input}
                                className="w-full outline-none bg-transparent border-b"
                                onKeyPress={handleShell}
                            />
                        </div>
                    </div>
                    <div>
                        <Credits />
                    </div>
                </footer>
            </div>
        </>
    );
}
