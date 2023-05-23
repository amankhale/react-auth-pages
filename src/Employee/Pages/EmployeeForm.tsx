import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import InputDate from "../../FormFields/InputDate";
import InputText from "../../FormFields/InputText";
import InputTextarea from "../../FormFields/InputTextarea";
import SelectInput from "../../FormFields/SelectInput";
import {
  GRADUATION,
  DESIGNATION,
  TECH_STACK,
  LOCATION_TYPE,
} from "../../utils/DropdownData";
import Employee from "../../utils/EmployeeForm.model";
import Validators from "../../utils/Validators";
import { msToYears } from "../../utils/utility";
import { getEmployeeData } from "../slice/employee.slice";
import { EmployeeRoute } from "../../routes";
import InputCheckbox from "../../FormFields/InputCheckbox";
import InputRadio from "../../FormFields/InputRadio";

import Web3 from "web3";
import { EMPLOYEE_ABI, EMPLOYEE_ADDRESS } from "../../config/ganache-abi";

export default function EmployeeForm() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const validators = useMemo(() => new Validators(), []);
  const { empList } = useSelector(getEmployeeData);
  const { employeeId } = useParams();

  const graduationList = GRADUATION;
  const designationList = DESIGNATION;
  const techStackList = TECH_STACK;
  const locationTypeList = LOCATION_TYPE;

  const [employee, setEmployee]: [any, any] = useState({});
  const [error, setError]: [any, any] = useState({});
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [currentAccount, setCurrentAccount]: [string, any] = useState("");
  const [employeeBlockChain, setEmployeeBlock]: [any, any] = useState();

  useEffect(() => {
    handleEdit(employeeId);
  }, [employeeId]);

  useEffect(() => {
    validateEmployeeForm();
  }, [employee]);

  useEffect(() => {
    loadBlockChaindata();
  }, []);

  async function loadBlockChaindata() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    const employees = new web3.eth.Contract(EMPLOYEE_ABI, EMPLOYEE_ADDRESS);
    setCurrentAccount(accounts[0]);
    setEmployeeBlock(employees);
  }

  function handleEmployeeChange(event: any): void {
    const type = event.target.name;
    const value = event.target.value;

    if (type == "techStack") {
      setEmployee((prevData: Partial<Employee>) => {
        let data: Partial<Employee> = structuredClone(prevData);
        data.techStack = data.techStack || [];
        const index = data.techStack.indexOf(value);
        if (index == -1) {
          data.techStack.push(value);
        } else {
          data.techStack.splice(index, 1);
        }
        return data;
      });
    } else {
      let data: any = {};
      data[type] = value;
      setEmployee((prevData: Partial<Employee>) => {
        return { ...prevData, ...data };
      });
    }
  }

  async function submit(event: any) {
    event.preventDefault();
    setFormSubmitted(true);
    // console.log(employee);

    const isError = Object.values(error).filter((x: any) => x).length > 0;
    if (isError) {
      return;
    }
    let payload: Employee = employee;
    if (!employeeId) {
      payload["id"] = crypto.randomUUID();
    }

    employeeBlockChain.methods
      .addEmployee(payload)
      .send({ from: currentAccount })
      .once("receipt", (receipt: any) => {
        console.log(receipt);
      });

    // dispatch(addEmployee(payload));
    // navigate(EmployeeRoute.List);
  }

  function handleEdit(id: string | undefined) {
    if (id) {
      const index = empList.findIndex((x: Employee) => x.id == id);
      if (index == -1) {
        navigate(EmployeeRoute.Add);
      } else {
        const data = empList[index];
        updateTitle("Edit Employee");
        setEmployee(data);
      }
    } else {
      updateTitle("Add Employee");
    }
  }

  function validateEmployeeForm(): void {
    const {
      firstName,
      lastName,
      email,
      date,
      techStack,
      location,
    }: Partial<Employee> = employee;
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validateDate(date);
    validateTechStack(techStack);
    validateLocation(location);
  }

  function validateFirstName(firstName: string | undefined): void {
    if (firstName && !validators.NAME_REGEX.test(firstName)) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, firstName: "Invalid First Name" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, firstName: null };
      });
    }
  }
  function validateLastName(lastName: string | undefined): void {
    if (lastName && !validators.NAME_REGEX.test(lastName)) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, lastName: "Invalid Last Name" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, lastName: null };
      });
    }
  }
  function validateEmail(email: string | undefined): void {
    if (!email) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, email: "Email is required" };
      });
    } else if (validators.email(email)) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, email: "Invalid Email" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, email: null };
      });
    }
  }
  function validateDate(date: string | undefined): void {
    if (!date) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, date: "Date is required" };
      });
      return;
    }
    const difference = msToYears(+new Date() - +new Date(date));

    if (
      difference &&
      (difference < validators.MIN_EMPLOYEE_AGE ||
        difference > validators.MAX_EMPLOYEE_AGE)
    ) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, date: "Invalid date of birth" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, date: null };
      });
    }
  }
  function validateTechStack(techStack: string[] | undefined): void {
    if (!techStack?.length) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, techStack: "Select atleast one option" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, techStack: null };
      });
    }
  }
  function validateLocation(location: string | undefined): void {
    if (!location) {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, location: "Location is required" };
      });
    } else {
      setError((prevData: Partial<Employee>) => {
        return { ...prevData, location: null };
      });
    }
  }

  function updateTitle(value: string): void {
    document.title = value;
  }

  return (
    <div className="employee-form">
      <h2>Employee form</h2>
      <form className="form" onSubmit={submit}>
        <InputText
          name="firstName"
          value={employee.firstName || ""}
          error={isFormSubmitted ? error.firstName : ""}
          setValue={handleEmployeeChange}
          label="First Name*"
          placeholder="Enter your first name"
        ></InputText>
        <InputText
          name="lastName"
          value={employee.lastName || ""}
          error={isFormSubmitted ? error.lastName : ""}
          setValue={handleEmployeeChange}
          label="Last Name*"
          placeholder="Enter your last name"
        ></InputText>
        <InputText
          name="email"
          value={employee.email || ""}
          error={isFormSubmitted ? error.email : ""}
          setValue={handleEmployeeChange}
          label="Email*"
          placeholder="Enter your email"
        ></InputText>
        <InputDate
          name="date"
          value={employee.date || ""}
          error={isFormSubmitted ? error.date : ""}
          setValue={handleEmployeeChange}
          label="Date of Birth*"
        ></InputDate>
        <SelectInput
          name="education"
          list={graduationList}
          value={employee.education || ""}
          setValue={handleEmployeeChange}
          label="Select highest education*"
        ></SelectInput>
        <SelectInput
          name="designation"
          list={designationList}
          value={employee.designation || ""}
          setValue={handleEmployeeChange}
          label="Select your designation*"
        ></SelectInput>
        <InputCheckbox
          name="techStack"
          list={techStackList}
          value={employee.techStack || [""]}
          setValue={handleEmployeeChange}
          error={isFormSubmitted ? error.techStack : ""}
          label="Select your Techstack*"
        ></InputCheckbox>
        <InputRadio
          name="location"
          list={locationTypeList}
          value={employee.location || ""}
          setValue={handleEmployeeChange}
          error={isFormSubmitted ? error.location : ""}
          label="Select your preferred location*"
        ></InputRadio>
        <InputTextarea
          name="remarks"
          value={employee.remarks || ""}
          setValue={handleEmployeeChange}
          label="Any remarks? (optional)"
          placeholder="Remarks"
          cols={30}
          rows={5}
        ></InputTextarea>
        <div className="form-field submit">
          <Link to={EmployeeRoute.List}>
            <button type="button">Back</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
