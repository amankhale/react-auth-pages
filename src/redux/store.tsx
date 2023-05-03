import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../Employee/EmployeeSlice/employee.slice";

export default configureStore({
  reducer: {
    employee: employeeSlice.reducer
  },
});
