import { createSlice } from "@reduxjs/toolkit";
import Employee from "../../utils/EmployeeForm.model";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    empList: new Array<Employee>(),
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

export const {
  deleteEmployee,
  addEmployee,
  setEditEmployeeData,
  resetEditEmployeeData,
} = employeeSlice.actions;
export const getEmployeeData = (state: any) => state.employee;