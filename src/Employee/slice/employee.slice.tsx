import { createSlice } from "@reduxjs/toolkit";
import Employee from "../../utils/EmployeeForm.model";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    empList: new Array<Employee>(),
    editEmployeeData: {},
  },
  reducers: {
    addEmployee: (state, action: { payload: Employee; type: string }) => {
      const data: Employee = action.payload;
      state.empList.push(data);
    },

    deleteEmployee: (state, action: { payload: number; type: string }) => {
      state.empList.splice(action.payload, 1);
    },

    editEmployee: (state, action: { payload: Employee; type: string }) => {
      const data: Employee = action.payload;
      const index = state.empList.findIndex((x: Employee) => x.id == data.id);
      state.empList.splice(index, 1, data);
    },
  },
});

export const { deleteEmployee, addEmployee } = employeeSlice.actions;
export const getEmployeeData = (state: any) => state.employee;
