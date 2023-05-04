import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  resetEditEmployeeData,
  setEditEmployeeData,
} from "../slice/employee.slice";
import { getEmployeeData } from "../slice/employee.slice";
import Employee from "../../utils/EmployeeForm.model";
import { useEffect } from "react";

export default function EmployeeList() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(resetEditEmployeeData());
  }, []);

  const { empList } = useSelector(getEmployeeData);

  function handleDelete(index: number) {
    dispatch(deleteEmployee(index));
  }

  function handleEdit(data: Employee) {
    dispatch(setEditEmployeeData(data));
    navigate("/employee/add");
  }

  return (
    <div className="employee-list-container d-flex justify-content-center">
      <div className="employee-list">
        <div className="d-flex justify-content-between gap-20">
          <h2>Employee List</h2>
          <Link to="/employee/add">
            <button className="reset-btn">Add Employee</button>
          </Link>
        </div>
        {empList.length ? (
          <table className="employee-table">
            <thead>
              <tr>
                <td>SNo.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Designation</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empList.map((data: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>
                    {data?.firstName} {data?.lastName}
                  </td>
                  <td>{data?.email}</td>
                  <td>{data?.designation}</td>
                  <td className="action-btn">
                    <button
                      onClick={() => handleEdit(data)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data-found">No data found</div>
        )}
      </div>
    </div>
  );
}
