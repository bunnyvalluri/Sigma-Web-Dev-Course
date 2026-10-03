/**
 * ==========================================================================
 * Sigma Web Development Course - Video 131
 * Topic: Project: GetMeAChai - Crowdfunding Platform
 * File: Footer.js
 * 
 * Description:
 *   Full-stack creator funding platform with Razorpay payment integration, NextAuth, and MongoDB.
 * ==========================================================================
 */
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer
