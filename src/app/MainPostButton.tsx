'use client';

import Image from 'next/image'
import MainCenterForm from './MainCenterForm';
import { useState } from 'react';

export default function MainPostButton() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showPostModal = () => {
        setIsModalVisible((prev) => !prev);
    };

    return (
        <>
            <button
                onClick={() => showPostModal()}
                className=
                    "bg-blue-500 text-white rounded-full gap-2 mr-5 px-4 py-2 lg:w-11/12 text-xl text-center transition duration-200 hover:bg-blue-400 h-16 lg:h-16 lg:px-4 w-16"
                >
                <span className="hidden lg:block">
                    Post
                </span>
                <Image className="lg:hidden" src="feather.svg" alt="" width={40} height={40} />
            </button>

            {isModalVisible && (
                <div className="modalOverlay" onClick={() => setIsModalVisible(false)} />
            )}

            {isModalVisible && (
                <div
                    className="postModal fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <MainCenterForm />
                </div>
            )}
        </>
    );
}