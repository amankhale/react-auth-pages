import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { EMPLOYEE_ABI, EMPLOYEE_ADDRESS } from "../config/ganache-abi";

const EmployeeBlockChainContext = createContext({});

export function useEmployeeBlock() {
  return useContext(EmployeeBlockChainContext);
}

export function Web3Provider({ children }: { children: any }) {
  const [employeeBlock, setEmployeeBlock]: [any, any] = useState();
  const [currentAccount, setCurrentAccount]: [string, any] = useState("");

  useEffect(() => {
    loadBlockChaindata();
  }, []);

  async function loadBlockChaindata() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    const employees = new web3.eth.Contract(EMPLOYEE_ABI, EMPLOYEE_ADDRESS);
    setEmployeeBlock(employees);
    setCurrentAccount(accounts);
    // const employeeCount = employees.methods.employeeCount().call();
    // const data = await employees.methods.employeeList(1).call();
  }

  return (
    <EmployeeBlockChainContext.Provider
      value={{ employeeBlock, currentAccount }}
    >
      {children}
    </EmployeeBlockChainContext.Provider>
  );
}
