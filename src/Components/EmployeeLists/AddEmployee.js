import { useRef, useState } from "react";
import employeeDetails from './EmployeeData'

const AddEmployee = ({ name, number, email, joinDate, status }) => {

    const [employee, setEmployee] = useState([]);
    const [input, setInput] = useState({ name, number, email, joinDate, status });


    const addemployee = (input) => {
        employeeDetails.createEmployee(input).then((response) => {
            setInput((prev) => ({ name: "", number: "", email: "" }));
            setEmployee((prev) => [...prev, response.data]);
        });
    };

    const className = {
        input: "border border-gray-400 rounded-lg py-3 px-6",
        container: "w-full h-auto p-5 rounded-xl border border-gray-500",
        inputContainer: "flex justify-center space-x-20",
        titleContainer: "w-full h-full px-5 font-SegoeUi mb-10 mt-5",
        title: "text-xl",
        form: "space-y-10 my-20",
        buttonContainer: "w-full h-auto flex justify-center pt-10",
        button: "px-10 py-3 bg-[#DB9936] rounded-xl text-sm font-AzoSans text-white",
    }

    const inputPlaceholder = {
        name: "Name",
        email: "Email",
        position: "Position",
        division: "Division",
        salary: "Salary",
        status: "Status",
    };

    const inputIDs = {
        name: "Name",
        email: "Email",
        position: "Position",
        division: "Division",
        salary: "Salary",
        status: "Status",
    }

    const inputRefs = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingemployee = employee.find((_) => _.id === input.id);
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

                inputRefs.current.value = '';
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

    return (
        <div className={className.container}>
            <div className={className.titleContainer}>
                <h1 className={className.title}>
                    Add Employee
                </h1>
            </div>
            <form className={className.form} onSubmit={handleSubmit}>
                <div className={className.inputContainer}>
                    <input
                        ref={inputRefs}
                        id={inputIDs.name}
                        name="name"
                        type="text"
                        value={input.name}
                        className={className.input}
                        onChange={handleChange}
                        placeholder={inputPlaceholder.name}
                    />
                    <input
                        ref={inputRefs}
                        id={inputIDs.email}
                        name="email"
                        className={className.input}
                        type="text"
                        value={input.number}
                        onChange={handleChange}
                        placeholder={inputPlaceholder.email}
                    />
                </div>
                <div className={className.inputContainer}>
                    <input
                        ref={inputRefs}
                        id={inputIDs.position}
                        type={"text"}
                        className={className.input}
                        onChange={handleChange}
                        placeholder={inputPlaceholder.position}
                    >

                    </input>
                    <input
                        ref={inputRefs}
                        id={inputIDs.division}
                        type={"text"}
                        className={className.input}
                        onChange={handleChange}
                        placeholder={inputPlaceholder.division}
                    >

                    </input>
                </div>
                <div className={className.inputContainer}>
                    <input ref={inputRefs} id={inputIDs.salary} onChange={handleChange} type={"number"} placeholder={inputPlaceholder.salary} className={className.input}>

                    </input>
                    <input ref={inputRefs} id={inputIDs.status} onChange={handleChange} type={"text"} placeholder={inputPlaceholder.status} value={input.status} className={className.input}>

                    </input>
                </div>
                <div className={className.buttonContainer}>
                    <button className={className.button} type={"submit"}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;