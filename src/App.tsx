import "./App.css";
import "./styles/form.css";
import "./styles/utility.css";
import EmployeeList from "./Employee/Pages/EmployeeList";
import EmployeeForm from "./Employee/Pages/EmployeeForm";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EmployeeLayout from "./layouts/EmployeeLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Navigate to="/employee/list" />}></Route>
        <Route path="employee" element={<EmployeeLayout />}>
          <Route index element={<Navigate to="/employee/list" />}></Route>
          <Route path="list" element={<EmployeeList />}></Route>
          <Route path="add" element={<EmployeeForm />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
