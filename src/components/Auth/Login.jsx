import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        // console.log('Email is ', email)
        // console.log('Password is ', password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex justify-center w-screen h-screen items-center'>
            <div className="border-2 border-red-600 p-3 w-[32%]">
                <form className='flex flex-col space-y-3 items-center justify-center' onSubmit={(e)=>{submitHandler(e)}}>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='text-green-400 px-3 py-2 w-full' type="email" name="email" id="email" placeholder='Enter your Email' required/>
                    <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className='text-green-400 px-3 py-2 w-full' type="password" name="password" id="password" placeholder='Enter Password' required/>
                    <button className='bg-green-400 text-dark px-3 py-2 w-full' >Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
