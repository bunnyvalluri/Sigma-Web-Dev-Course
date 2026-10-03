/**
 * ==========================================================================
 * Sigma Web Development Course - Video 096
 * Topic: Mongoose ODM with Express
 * File: Todo.js
 * 
 * Description:
 *   Defining Mongoose Schemas, compiling Models, connecting to MongoDB, and performing database operations.
 * ==========================================================================
 */
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "Hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema);
