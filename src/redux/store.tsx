import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../Employee/slice/employee.slice";

export default configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});
