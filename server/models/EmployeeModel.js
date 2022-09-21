import mongoose from "mongoose";

const Employee = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinDate: {
        type: String,
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
    position: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: false
    },
    salary: {
        type: String,
        required: true
    },
});

export default mongoose.model('Employee', Employee);