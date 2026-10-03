/**
 * ==========================================================================
 * Sigma Web Development Course - Video 131
 * Topic: Project: GetMeAChai - Crowdfunding Platform
 * File: User.js
 * 
 * Description:
 *   Full-stack creator funding platform with Razorpay payment integration, NextAuth, and MongoDB.
 * ==========================================================================
 */
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String},
    username: { type: String, required: true },
    profilepic: {type: String},
    coverpic: {type: String},
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    });

 
export default mongoose.models.User || model("User", UserSchema);;