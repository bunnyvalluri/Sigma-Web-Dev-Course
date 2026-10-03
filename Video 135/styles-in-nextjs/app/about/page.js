"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 135
 * Topic: Styling Strategies in Next.js
 * File: page.js
 * 
 * Description:
 *   Exploring CSS Modules (.module.css), Tailwind CSS, and global styles in Next.js applications.
 * ==========================================================================
 */
import React from 'react'

const About = () => {
    return (
        <div>

            <div className='container'>

                <h1>This is about me</h1>
                <p>Hey I am a good boy</p>

                <style jsx>{`
            .container{
                background-color: red;
                color: green;
                }
                `}
                </style>
            </div>
            <div className="container">
                Hey I am good
            </div>
        </div>
    )
}

export default About