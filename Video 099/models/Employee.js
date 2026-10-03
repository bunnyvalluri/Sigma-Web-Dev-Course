/**
 * ==========================================================================
 * Sigma Web Development Course - Video 099
 * Topic: Solution: Generate Dummy Data in MongoDB
 * File: Employee.js
 * 
 * Description:
 *   Complete implementation seeding random user/employee records into a Mongoose model.
 * ==========================================================================
 */
// Import Mongoose ODM for MongoDB
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee