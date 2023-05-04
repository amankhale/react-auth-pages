import { Route, Navigate } from "react-router-dom";
import EmployeeForm from "./Employee/Pages/EmployeeForm";
import EmployeeList from "./Employee/Pages/EmployeeList";
import EmployeeLayout from "./layouts/EmployeeLayout";

export const EmployeeRoute = {
  Add: "/employee/add",
  List: "/employee/list",
  Edit: "/employee/edit/",
};

export const Routes = (
  <Route>
    <Route index element={<Navigate to={EmployeeRoute.List} />}></Route>
    <Route path="employee" element={<EmployeeLayout />}>
      <Route index element={<Navigate to={EmployeeRoute.List} />}></Route>
      <Route path={EmployeeRoute.List} element={<EmployeeList />}></Route>
      <Route path={EmployeeRoute.Add} element={<EmployeeForm />}></Route>
      <Route
        path={EmployeeRoute.Edit + ":employeeId"}
        element={<EmployeeForm />}
      ></Route>
    </Route>
  </Route>
);
