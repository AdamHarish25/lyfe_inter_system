import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Components/Modal/Modal";

export const ModalDelete = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const deleteEmployee = async (ids) => {
        try {
            await axios.delete(`http://localhost:7000/Employees/${ids}`);
            navigate("/Employee/EmployeeLists");
        } catch (error) {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error.message)
            }
        }
    };


    return <Modal key={id} displayModal={"block"} cancelAction={() => navigate("/Employee/EmployeeLists")}
        onClickAction={() => deleteEmployee(id)}
    />
}