import EmployeeModel from "../models/EmployeeModel.js";

export const getEmployee = async (req, res) => {
    try {
        const employee = await EmployeeModel.find();
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);
        res.json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveEmployee = async (req, res) => {
    const employee = new EmployeeModel(req.body);
    try {
        const insertEmployee = await employee.save();
        res.status(201).json(insertEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const updateEmployee = await EmployeeModel.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const deleteEmployee = await EmployeeModel.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}