/**
 * ==========================================================================
 * Sigma Web Development Course - Video 131
 * Topic: Project: GetMeAChai - Crowdfunding Platform
 * File: connectDb.js
 * 
 * Description:
 *   Full-stack creator funding platform with Razorpay payment integration, NextAuth, and MongoDB.
 * ==========================================================================
 */

import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }

  export default connectDb;