"use client"

import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { handleRegister } from "@/api";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');

  const handleRegistration = async () => {
    try {
      await handleRegister({ username, password, email, confirmPassword });
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      router.push('/posts')
    }
  }

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
      <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
      <form>
        <div className="relative my-4">
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setUserName(e.target.value)} />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Username</label>
            <BiUser className='absolute top-4 right-4 text-slate-400'/>
        </div>
        <div className="relative my-4">
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setEmail(e.target.value)} />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Email</label>
            <IoIosMail className='absolute top-4 right-4 text-slate-400'/>
        </div>
        <div className="relative my-4">
            <input type="password" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setPassword(e.target.value)}/>
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-slate-400'/>
        </div>
        <div className="relative my-4">
            <input type="password" className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder="" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Confirm Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-slate-400'/>
        </div>
        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit" onClick={handleRegistration}><Link href="/posts"className="" rel="preload">Register</Link></button>
        <div className='mt-2 items-center'>
          <div className="my-4">
            <span>Already Register? <span className="text-blue-500">  <Link href="/">Login</Link></span></span>
            
          </div>
          <button className="bg-white rounded-full p-1">
            <Link href="/posts" className="text-blue-500">fake register</Link>
          </button>
        </div>
      </form>
    </div>
  </div>

  );
};

export default Register;