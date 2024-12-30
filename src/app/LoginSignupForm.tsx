import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function LoginSignupForm() {
    
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
        {isLogin ? (
            <div className='w-full'>
                <Login />
                <div className='flex justify-center mb-2'>
                    <button onClick={() => setIsLogin(false)}>Dont have an account yet?</button>
                </div>
            </div>
        ) : (
            <div className='w-full'>
                <Signup />
                <div className='flex justify-center mb-2'>
                    <button onClick={() => setIsLogin(true)}>Already have an account?</button>
                </div>
            </div>
        )}
    </>
    )
}