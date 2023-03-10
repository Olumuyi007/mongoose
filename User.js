const mongoose = require('mongoose');
const addressSchema = new mongoose.Schemaaddress({
    street: String,
    city: String,
})
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    undatedAt: Date,
    bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [String],
    
})

module.exports = mongoose.model ("User", userSchema)