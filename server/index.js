import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeRoutes from "./routes/EmployeeRoutes.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/Lyfe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(EmployeeRoutes);

app.listen(7000, () => console.log('Server up and running...'));
