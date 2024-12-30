"use client"
import Image from 'next/image'
import LoginSignupForm from './LoginSignupForm'
import Profile from './Profile'

import { useState, useEffect } from 'react'

export default function ProfileLeft() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem('username');
        if (userId) {
            setIsLoggedIn(true);
        }
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const username = sessionStorage.getItem('username');

    return (
        <>
            <button onClick={() => setIsModalVisible((prev) => !prev)} className="MainProfileLeft mt-5 mb-5 rounded-full flex items-center gap-2 px-4 py-2 lg:w-11/12 md:w-fit text-xl h-16 transition duration-200 hover:bg-gray-800 ">
                <Image className='lg:hidden' src="profile.svg" alt="" width={30} height={30}/>
                
                <Image className='hidden lg:block' src="profile.svg" alt="" width={40} height={40}/>
                
                <p className="font-bold ml-4 hidden lg:block">{username ? ("@" + username) : ("@guest") }</p>
            </button>

            {isModalVisible && (
                <div className="modalOverlay" onClick={() => setIsModalVisible(false)} />
            )}

            {isModalVisible && (
                <div
                    className="postModal2 fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >

                    {isLoggedIn ? (
                       <Profile /> 
                    ) : (
                        <LoginSignupForm />
                    )}

                </div>
            )}
        </>
    )
}