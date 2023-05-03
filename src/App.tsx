import { useState } from "react";
import "./App.css";
import "./styles/form.css";
import "./styles/utility.css";
import EmployeeList from "./Employee/Pages/EmployeeList";
import empForm from "./utils/EmployeeForm.model";
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
  const [isEditActive, setEditActive] = useState(false);
  const [empList, setEmpList]: [any[], any] = useState([]);
  const [editData, setEditData] = useState({});

  function handleSubmit(data: empForm) {
    setEmpList((prevList: any[]) => {
      let index = empList.findIndex((x: empForm) => x.email == data.email);
      if (index == -1) {
        return [data, ...prevList];
      } else {
        let new_data = empList;
        new_data.splice(index, 1, data);
        return new_data;
      }
    });
  }

  function handleEdit(data: empForm) {
    setEditActive(true);
    setEditData(data);
  }

  function handleDelete(index: number) {
    setEmpList((prevData: any[]) => {
      let new_data = [...prevData];
      new_data.splice(index, 1);
      return new_data;
    });
  }

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

  return (
    <RouterProvider router={router} />

    // <div className="container">
    //   <EmployeeForm
    //     handleSubmit={handleSubmit}
    //     isEditActive={isEditActive}
    //     setEditActive={setEditActive}
    //     editData={editData}
    //   ></EmployeeForm>
    //   <EmployeeList
    //     empList={empList}
    //     handleDelete={handleDelete}
    //     handleEdit={handleEdit}
    //   ></EmployeeList>
    // </div>
  );
}
