import mongoose from "mongoose";

const Employee = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false
    },
});

export default mongoose.model('Employee', Employee);