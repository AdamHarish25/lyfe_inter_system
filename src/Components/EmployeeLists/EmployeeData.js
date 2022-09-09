/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3000/Employees";

const data = {
  employee: [
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    },
    {
      name: "Dan Abramov",
      number: "1234",
      id: 13
    }
  ]
};

const allEmployee = () => {
  return Promise.resolve({ data: [...data.employee] });
};

const createEmployee = (input) => {
  data.employee.push(input);
  console.log("creating person", input);
  return Promise.resolve({ data: input });
};

const deleteEmployee = (id, employee) => {
  return axios.delete(`${baseUrl}/${0}`, employee);
};

const editEmployee = (id, employee) => {
  const personIndex = data.employee.findIndex((_) => _.id === id);
  console.log("saving", employee);
  if (personIndex >= 0) {
    data.employee[personIndex] = employee;
    return Promise.resolve(employee);
  } else {
    return Promise.reject("Can't edit; person not found");
  }
};

export default { allEmployee, createEmployee, deleteEmployee, editEmployee };
