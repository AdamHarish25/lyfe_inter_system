import express from "express";
import {
    getEmployee,
    getEmployeeById,
    saveEmployee,
    updateEmployee,
    deleteEmployee
} from "../controller/EmployeeController.js";

const router = express.Router();

router.get('/Employee', getEmployee);
router.get('/Employee/:id', getEmployeeById);
router.post('/Employee', saveEmployee);
router.patch('/Employee/:id', updateEmployee);
router.delete('/Employee/:id', deleteEmployee);

export default router;