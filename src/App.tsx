import { useState } from 'react';
import './App.css';
import { DESIGNATION, GRADUATION, LOCATION_TYPE, TECH_STACK } from './utils/DropdownData';
import { InputText } from './FormFields/InputText';
import { InputDate } from './FormFields/InputDate';
import SelectInput from './FormFields/SelectInput';
import InputTextarea from './FormFields/InputTextarea';

interface empForm {
  firstName: string,
  lastName: string,
  email: string,
  date: string,
  education: string,
  designation: string,
  techStack: string[],
  location: string,
  remarks: string
}

export default function App() {

  const graduationList = GRADUATION;
  const designationList = DESIGNATION;
  const techStackList = TECH_STACK;
  const locationTypeList = LOCATION_TYPE;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [education, setEducation] = useState('');
  const [designation, setDesignation] = useState('');
  const [techStack, setTechstack]: [any[], any] = useState([]);
  const [location, setLocation] = useState('');
  const [remarks, setRemarks] = useState('');

  const [isEditActive, setEditActive] = useState(false);

  const [empList, setEmpList]: [any[], any] = useState([]);

  function handleTechStack(value: string) {
    setTechstack((prevData: any) => {
      let new_data: any[] = [...prevData];
      let index = new_data.indexOf(value);
      if (index == -1) {
        new_data.push(value);
      } else {
        new_data.splice(index, 1);
      }
      return new_data;
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let payload: empForm = { firstName, lastName, email, date, education, designation, techStack, location, remarks };
    setEmpList((prevList: any[]) => {
      let index = empList.findIndex((x: empForm) => x.email == email);
      if (index == -1) {
        return [payload, ...prevList];
      } else {
        let new_data = empList;
        new_data.splice(index, 1, payload);
        return new_data;
      }
    });
    console.log(payload);
    setEditActive(false);
    handleReset();
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setDate('');
    setEducation('');
    setDesignation('');
    setTechstack([]);
    setLocation('');
    setRemarks('');
  }

  function handleEdit(index: number) {
    let data: empForm = empList[index];
    console.log(data);
    setFirstName(data?.firstName);
    setLastName(data?.lastName);
    setEmail(data?.email);
    setDate(data?.date);
    setEducation(data?.education);
    setDesignation(data?.designation);
    setTechstack(data?.techStack);
    setLocation(data?.location);
    setRemarks(data?.remarks);

    setEditActive(true);
  }

  function handleDelete(index: number) {
    setEmpList((prevData: any[]) => {
      let new_data = [...prevData];
      new_data.splice(index, 1);
      return new_data;
    });
  }

  return (
    <div className="container">
      <div className="employee-form">
        <h2>Employee form</h2>
        <form className='form' onSubmit={handleSubmit}>
          <InputText value={firstName} setValue={setFirstName} label="First Name" placeholder="Enter your first name"></InputText>
          <InputText value={lastName} setValue={setLastName} label="Last Name" placeholder="Enter your last name"></InputText>
          <InputText value={email} setValue={setEmail} label="Email" placeholder="Enter your email"></InputText>
          <InputDate value={date} setValue={setDate} label="Date of Birth"></InputDate>
          <SelectInput list={graduationList} value={education} setValue={setEducation} label="Select highest education"></SelectInput>
          <SelectInput list={designationList} value={designation} setValue={setDesignation} label="Enter your designation"></SelectInput>

          <div className="form-field">
            <label className="fs-12">Select your tech stack</label>
            <div className="d-flex gap-20">
              {techStackList.map((x: any) =>
                <label className="cursor-pointer" htmlFor={x.value} key={x.id}>
                  <input onChange={(e: any) => handleTechStack(e.target.value)} checked={techStack.includes(x.value)} type="checkbox" value={x.value} id={x.value} />{x.value}
                </label>
              )}
            </div>
          </div>

          <div className="form-field">
            <label className='fs-12'>Select your location</label>
            <div className='d-flex gap-20'>
              {locationTypeList.map((x: any) =>
                <label key={x.id} className="cursor-pointer multiselect" htmlFor={x.value}>
                  <input onChange={() => setLocation(x.value)} checked={location == x.value} type="radio" value={x.value} id={x.value} />{x.value}
                </label>
              )}
            </div>
          </div>

          <InputTextarea value={remarks} setValue={setRemarks} label="Any remarks?" placeholder="Remarks" cols={30} rows={5}></InputTextarea>

          <div className="form-field submit">
            <button type="submit">Submit</button>
            {isEditActive ? <button onClick={handleReset} className='reset-btn' type='button'>Reset</button> : ''}
          </div>
        </form>
      </div>
      <div className="employee-list">
        <h2>Employee List</h2>
        {
          empList.length ?
            <table className='employee-table'>
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
                {empList.map((data: any, index: number) =>

                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{data?.firstName} {data?.lastName}</td>
                    <td>{data?.email}</td>
                    <td>{data?.designation}</td>
                    <td className='action-btn'>
                      <button onClick={() => handleEdit(index)} className='edit-btn'>Edit</button>
                      <button onClick={() => handleDelete(index)} className='delete-btn'>Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table> :
            <div className="no-data-found">
              No data found
            </div>
        }
      </div>
    </div>
  )
}