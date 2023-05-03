import { createSlice } from "@reduxjs/toolkit";
import Employee from "../../utils/EmployeeForm.model";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    empList: [
      { firstName: "Akshay", lastName: "Kumar", designation: "SSE" },
      { firstName: "Ajay", lastName: "Devgan", designation: "TL" },
      { firstName: "Aman", lastName: "Khale", designation: "SSE" },
    ],
    editEmployeeData: {},
  },
  reducers: {
    deleteEmployee: (state, action: { payload: number; type: string }) => {
      state.empList.splice(action.payload, 1);
    },
    addEmployee: (state, action: { payload: Employee; type: string }) => {
      state.empList.push(action.payload);
    },
    setEditEmployeeData: (
      state,
      action: { payload: Employee; type: string }
    ) => {
      state.editEmployeeData = action.payload;
    },
    resetEditEmployeeData: (state) => {
      state.editEmployeeData = {};
    },
  },
});

export const { deleteEmployee, addEmployee } = employeeSlice.actions;
export const getEmployeeData = (state: any) => state.employee;