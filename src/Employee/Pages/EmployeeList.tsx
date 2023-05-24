// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteEmployee } from "../slice/employee.slice";
// import { getEmployeeData } from "../slice/employee.slice";
import Employee from "../../utils/EmployeeForm.model";
import { EmployeeRoute } from "../../routes";
import { useEffect, useState } from "react";
import { useEmployeeBlock } from "../../context/web3.context";

export default function EmployeeList() {
  const employeeBlockChain: any = useEmployeeBlock();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [empList, setEmpList]: [any[], any] = useState([]);
  // const { empList } = useSelector(getEmployeeData);

  useEffect(() => {
    document.title = "Employee List";
  }, []);

  useEffect(() => {
    if (employeeBlockChain?.employeeBlock) {
      loadEmployeeList();
    }
  }, []);

  async function loadEmployeeList() {
    const employeeList = await employeeBlockChain.employeeBlock.methods
      .getEmployeeList()
      .call();
    console.log(employeeList);
    setEmpList(employeeList);
    console.log(employeeBlockChain.currentAccount);
  }

  async function handleDelete(_id: string) {
    await employeeBlockChain.employeeBlock.methods
      .deleteEmployee(_id)
      .send({ from: employeeBlockChain.currentAccount })
      .once("receipt", (receipt: any) => {
        console.log(receipt);
      });
  }

  function handleEdit(employeeId: string) {
    navigate(`${EmployeeRoute.Edit}${employeeId}`);
  }

  return (
    <div className="employee-list-container d-flex justify-content-center">
      <div className="employee-list">
        <div className="d-flex justify-content-between gap-20">
          <h2>Employee List</h2>
          <Link to={EmployeeRoute.Add}>
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
              {empList.map((data: Employee, index: number) => (
                <tr key={data.id}>
                  <td>{index + 1}.</td>
                  <td>
                    {data?.firstName} {data?.lastName}
                  </td>
                  <td>{data?.email}</td>
                  <td>{data?.designation}</td>
                  <td className="action-btn">
                    <button
                      onClick={() => handleEdit(data.id)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
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
