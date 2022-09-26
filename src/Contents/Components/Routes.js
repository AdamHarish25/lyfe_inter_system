import { Dashboard } from "../Dashboard/Dashboard";
import AddEmployees from "../EmployeeNew/AddEmployees";
import EditEmployee from "../EmployeeNew/EditEmployee";
import EmployeeList from "../EmployeeNew/EmployeeList";

export const locationRoutes = [
    {
        path: "/",
        element: <Dashboard />,
        exact: true,
    },
    {
        path: "/Employee/EmployeeLists",
        element: <EmployeeList />,
        exact: false,
    },
    {
        path: "/Employee/AddorEditEmployee",
        element: <AddEmployees />,
        exact: false,
    },
    {
        path: "/Employee/EmployeeLists/AddorEditEmployee/:id",
        element: <EditEmployee />,
        exact: false,
    },
];