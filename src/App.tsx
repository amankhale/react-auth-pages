import "./App.css";
import "./styles/form.css";
import "./styles/utility.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Routes } from "./routes";

import { Web3Provider } from "./context/web3.context";

import Web3 from "web3";
import { EMPLOYEE_ABI, EMPLOYEE_ADDRESS } from "./config/ganache-abi";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    loadBlockChaindata();
  }, []);

  async function loadBlockChaindata() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const employees = new web3.eth.Contract(EMPLOYEE_ABI, EMPLOYEE_ADDRESS);
    // const employeeCount = employees.methods.employeeCount().call();
    const data = await employees.methods.employeeList(1).call();
    console.log(data);
  }

  const router = createBrowserRouter(createRoutesFromElements(Routes));
  return (
    <Web3Provider>
      <RouterProvider router={router} />
    </Web3Provider>
  );
}
