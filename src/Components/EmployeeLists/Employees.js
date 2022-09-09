/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Icons from '../Icons';
import employeeDetails from './EmployeeData'
import Employee from './EmployeeTemplate';

export const EmployeeLists = ({ visibility, name, number }) => {

    const [search, setSearch] = useState("");

    const [employee, setEmployee] = useState([]);
    const [input, setInput] = useState({ name, number });
    console.log("input", input);

    useEffect(() => {
        employeeDetails.allEmployee().then((response) => setEmployee(response.data));
    }, []);

    const addemployee = (input) => {
        employeeDetails.createemployee(input).then((response) => {
            setInput((prev) => ({ name: "", number: "" }));
            setEmployee((prev) => [...prev, response.data]);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingemployee = employee.find((_) => _.name === input.name);
        if (existingemployee) {
            if (
                window.confirm(
                    `${existingemployee.name} is already in the phonebook, replace the old number with a new one?`
                )
            ) {
                employeeDetails.editEmployee(existingemployee.id, input).then((response) => {
                    setEmployee((prev) => [
                        ...prev.filter((_) => _.id !== response.id),
                        response
                    ]);
                });
            }
        } else {
            addemployee(input);
        }
    };

    const handleChange = (e) => {
        setInput((prev) => ({
            ...input,
            [e.target.name]: e.target.value
        }));
    };
    const filteredPeople = employee.filter((employee) => {
        return employee.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className='w-full h-full bg-white rounded-2xl p-10 font-AzoSans'>

            <div className='w-auto h-auto space-x-10 flex'>
                <div className="border-2 border-[#D9E1E7] px-4 rounded-xl flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none"
                    />
                    <div className='cursor-pointer' onClick={(e) => setSearch(e.target.value)}>
                        {Icons.magnifierGlass("text-[#99B2C6]")}
                    </div>
                </div>

                <button className='w-40 h-10 rounded-xl bg-[#F1F4F9] flex justify-evenly items-center text-sm'>
                    Position
                    {Icons.downArrow("text-gray-700")}
                </button>
            </div>
            <h2>add a new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name:
                    <input
                        name="name"
                        type="text"
                        value={input.name}
                        onChange={handleChange}
                    />
                    <br />
                    number:
                    <input
                        name="number"
                        type="text"
                        value={input.number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <li>
                {filteredPeople.map((employee) => (
                    <Employee
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        addemployee={addemployee}
                        key={employee.number}
                        employee={employee}
                    />
                ))}
            </li>
            <br />
        </div>)
}