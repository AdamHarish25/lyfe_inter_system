import deleteOne from './EmployeeData'

const Employee = ({ id, employee }) => {
    const handledelete = () => {
        alert(
            `Delete ${employee.name}?, ${employee.name} will disappear when you refresh`
        );
        deleteOne.deleteemployee(employee.id);
    };
    return (
        <div>
            {" "}
            {employee.name} {employee.number}{" "}
            <button onClick={handledelete}>delete</button>{" "}
        </div>
    );
};

export default Employee;