"use client"

import Link from 'next/link';
import {BiUser} from "react-icons/bi";
import {AiOutlineUnlock} from "react-icons/ai";
import { useState } from 'react';
import { handleLogin } from '@/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUserLogin = async () => {
      try {
        await handleLogin({email, password});
      } catch (error) {
        console.error('Login failed in component:', error);
      }
    };
    return (
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
                <h1 className="text-4xl text-white font-bold  text-center mb-6">Login</h1>
                <form action="">
                <div className="relative my-4">
                    <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Email</label>
                    <BiUser className="absolute top-4 right-4"/>
                </div>
                <div className="relative my-4">
                    <input type="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                    <AiOutlineUnlock className="absolute top-4 right-4"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>
                    <a className="text-blue-500">Forgot Password?</a>
                </div>
                <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit" onClick={handleUserLogin}>Login</button>
                <div>
                    <span className="m-4">New Here?{' '} 
                    <Link href="/register" className="text-blue-500">
                        Create an Account
                    </Link></span>
                </div>
                <button className="bg-white rounded-full p-1 m-2">
                  <Link href="/posts" className="text-blue-500">fake login</Link>
                </button>
                </form>
            </div>
        </div>
    );
};

export default Login;