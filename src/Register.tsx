import { Link } from 'react-router-dom'; 
import {BiUser} from 'react-icons/bi';
import {AiOutlineUnlock} from 'react-icons/ai'
import './App.css'

const Register = () => {
    return (
        <div id='bg'>
           <div className="bg-slate-800 border border-slate-400 rounder-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-whitefont-bold text-center mb-8">Register</h1>
                <form action="">
                    <div className="relative m-4 mb-8">
                        <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm text-white duraton-300 transform -translate-y-6 scale-75 top-[-1px] -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
                        <BiUser className='absolute top-0 right-4'/>
                    </div>
                    <div className="relative m-4 mb-8">
                        <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm text-white duraton-300 transform -translate-y-6 scale-75 top-[-1px] -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Your Password</label>
                        <AiOutlineUnlock className='absolute top-0 right-4'/>
                    </div>
                    <div className="relative m-4">
                        <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer' placeholder='' />
                        <label htmlFor="" className='absolute text-sm text-white duraton-300 transform -translate-y-6 scale-75 top-[-1px] -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Confirm Password</label>
                        <AiOutlineUnlock className='absolute top-0 right-4'/>
                    </div>

                    <Link to ='/Todo'><button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300' type="submit">Register</button></Link>
                    <div>
                        <span className='m-9'>Already Create an Account? <Link className='text-blue-500' to='/Login'>Login</Link></span>
                    </div>
                </form>
           </div>
        </div>
    );
}; 

export default Register;