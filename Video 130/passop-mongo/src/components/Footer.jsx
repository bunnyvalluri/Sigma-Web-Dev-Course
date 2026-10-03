/**
 * ==========================================================================
 * Sigma Web Development Course - Video 130
 * Topic: Project: PassOP - Password Manager
 * File: Footer.jsx
 * 
 * Description:
 *   Full-stack password manager app with React/Next.js frontend, MongoDB storage, and copy-to-clipboard.
 * ==========================================================================
 */
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by CodeWithHarry </div>
        </div>
    )
}

export default Footer
