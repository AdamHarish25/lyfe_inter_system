import mongoose from "mongoose";

const Employee = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
});

export default mongoose.model('Employee', Employee);