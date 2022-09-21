import express from "express";
import {
    getEmployee,
    getEmployeeById,
    saveEmployee,
    updateEmployee,
    deleteEmployee
} from "../controller/EmployeeController.js";

const router = express.Router();

router.get('/Employees', getEmployee);
router.get('/Employees/:id', getEmployeeById);
router.post('/Employees', saveEmployee);
router.patch('/Employees/:id', updateEmployee);
router.delete('/Employees/:id', deleteEmployee);

export default router;