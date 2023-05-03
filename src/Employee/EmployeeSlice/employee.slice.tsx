import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    empList: [
      { id: 1, firstName: "Akshay", lastName: "Kumar", designation: "SSE" },
      { id: 2, firstName: "Ajay", lastName: "Devgan", designation: "TL" },
      { id: 3, firstName: "Aman", lastName: "Khale", designation: "SSE" },
    ],
  },
  reducers: {
    deleteEmployee: (state, action) => {
      state.empList.splice(action.payload.index, 1);
    },
  },
});

export const { deleteEmployee } = employeeSlice.actions;
