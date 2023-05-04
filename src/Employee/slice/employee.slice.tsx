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

      const index = state.empList.findIndex((x: Employee) => x.id == data.id);

      if (index == -1) {
        state.empList.push(data);
      } else {
        state.empList.splice(index, 1, data);
      }
    },

    deleteEmployee: (state, action: { payload: number; type: string }) => {
      state.empList.splice(action.payload, 1);
    },

    setEditEmployeeData: (
      state,
      action: { payload: Employee; type: string }
    ) => {
      state.editEmployeeData = action.payload;
    },

    resetEditEmployeeData: (state) => {
      state.editEmployeeData = {};
    }
  },
});

export const {
  deleteEmployee,
  addEmployee,
  setEditEmployeeData,
  resetEditEmployeeData,
} = employeeSlice.actions;
export const getEmployeeData = (state: any) => state.employee;
