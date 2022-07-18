import Link from "next/link";
import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function Navbar() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <ul className="flex gap-10 pointer-events-auto">
                <li>
                    <a className="p-2 text-lg text-black" onClick={showModal}>
                        About
                    </a>
                </li>
                <li>
                    <a className="p-2 text-lg text-black" onClick={showModal}>
                        Services
                    </a>
                </li>
                <li>
                    <a className="p-2 text-lg text-black" onClick={showModal}>
                        Credits
                    </a>
                </li>
                <li>
                    <a className="p-2 text-lg text-black" onClick={showModal}>
                        Credits
                    </a>
                </li>
            </ul>
            <Modal
                title="Lorem"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec eget ex euismod, euismod nisi eu, consectetur
                </p>
            </Modal>
        </>
    );
}
