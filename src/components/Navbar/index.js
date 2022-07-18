// Antd
import { Button, Modal } from "antd";

// Antd Icons
import { FacebookOutlined, GithubOutlined, GlobalOutlined } from "@ant-design/icons";

// React
import { useState } from "react";

// Next.js
import Image from "next/image";

export default function Navbar() {
    const [isModalAbout, setIsModalAbout] = useState(false);
    const [isModalCredits, setIsModalCredits] = useState(false);

    return (
        <>
            <ul className="flex gap-10 pointer-events-auto">
                <li>
                    <a
                        className="p-2 text-lg text-black"
                        onClick={() => setIsModalAbout(true)}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        className="p-2 text-lg text-black"
                        onClick={() => setIsModalCredits(true)}
                    >
                        Credits
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/lordriyan/EiLab"
                        target="_blank"
                        rel="noreferrer"
                        className="pb-2 text-lg text-black flex items-center gap-2"
                    >
                        <GithubOutlined /> GitHub
                    </a>
                </li>
            </ul>
            <Modal
                centered
                title="About"
                visible={isModalAbout}
                onOk={() => setIsModalAbout(false)}
                onCancel={() => setIsModalAbout(false)}
                footer={[
                    <Button key="back" onClick={() => setIsModalAbout(false)}>
                        Return
                    </Button>,
                ]}
            >
                <div className="flex justify-center">
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
                <div className="pt-4 first-letter:ml-8 text-justify">
                    AVIXY Lab is a research and development company that focused
                    on Automation, AI and Machine Learning. We are a team of
                    highly skilled and experienced engineers and scientists who
                    are dedicated to the development of high-quality products
                    and services.
                </div>
                <div className="pt-4">
                    <h3>Contact:</h3>
                    <div className="flex gap-10 justify-center my-4">
                        <a className="flex items-center gap-2 hover:opacity-80" href="https://www.facebook.com/avixy.g" target="_blank" rel="noreferrer">
                            <FacebookOutlined className="text-2xl" /> @avixy.g
                        </a>
                        <a className="flex items-center gap-2 hover:opacity-80" href="https://avixy.vercel.app/" target="_blank" rel="noreferrer">
                            <GlobalOutlined className="text-2xl" /> avixy.vercel.app
                        </a>
                    </div>
                </div>
            </Modal>
            <Modal
                centered
                title="Credits"
                visible={isModalCredits}
                onOk={() => setIsModalCredits(false)}
                onCancel={() => setIsModalCredits(false)}
                footer={[
                    <Button key="back" onClick={() => setIsModalCredits(false)}>
                        Return
                    </Button>,
                ]}
            >
                <h3>3D Model:</h3>
                <ol>
                    <li>
                        <a
                            href="https://www.mihoyo.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            miHoYo
                        </a>
                        <br /> (BiliBili：
                        <a
                            href="https://space.bilibili.com/17466365"
                            target="_blank"
                            rel="noreferrer"
                        >
                            观海子
                        </a>
                        )
                    </li>
                </ol>
                <h3>Motion:</h3>
                <ol>
                    <li>
                        <a
                            href="http://www.cs.nitech.ac.jp/english/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dept. of Computer Science, Nagoya Inst. of Tech
                        </a>
                        <br /> (
                        <a
                            href="https://www.mmdagent.jp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MMDAgent Project Team
                        </a>
                        )
                    </li>
                </ol>
            </Modal>
        </>
    );
}
