/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3000/";

const data = {
  employee: [
    {
      name: "Mary Poppendieck",
      number: "091948919",
      email: "MaryPop21@gmail.com",
      joinDate: "11/12/15",
      status: "Active",
      id: 4
    },
    {
      name: "Dan Abramov",
      number: "01941059",
      email: "AbramovDan32@gmail.com",
      joinDate: "06/26/16",
      status: "Non-Active",
      id: 13
    },
    {
      name: "Mbah mu peang...",
      number: "08193819319",
      email: "mbahmu@peang.com",
      joinDate: "10/23/16",
      status: "Active",
      id: 102
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
