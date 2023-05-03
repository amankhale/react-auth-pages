import { useEffect, useMemo, useState } from "react";
import { InputDate } from "../FormFields/InputDate";
import { InputText } from "../FormFields/InputText";
import InputTextarea from "../FormFields/InputTextarea";
import SelectInput from "../FormFields/SelectInput";
import { GRADUATION, DESIGNATION, TECH_STACK, LOCATION_TYPE } from "../utils/DropdownData";
import empForm from "../utils/EmployeeForm.model";
import Validators from "../utils/Validators";
import { msToYears } from "../utils/utility";

export default function EmployeeForm(props: any) {

    const { handleSubmit, isEditActive, setEditActive, editData } = props;

    const graduationList = GRADUATION;
    const designationList = DESIGNATION;
    const techStackList = TECH_STACK;
    const locationTypeList = LOCATION_TYPE;
    const validators = useMemo(() => new Validators(), []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [education, setEducation] = useState('10th');
    const [designation, setDesignation] = useState('SE');
    const [techStack, setTechstack]: [any[], any] = useState([]);
    const [location, setLocation] = useState('');
    const [remarks, setRemarks] = useState('');
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [error, setError]: [Partial<empForm>, any] = useState({});

    useEffect(() => {
        validateFirstName();
    }, [firstName]);
    useEffect(() => {
        validateLastName();
    }, [lastName]);
    useEffect(() => {
        validateEmail();
    }, [email]);
    useEffect(() => {
        validateDate();
    }, [date]);
    useEffect(() => {
        validateTechStack();
    }, [techStack]);
    useEffect(() => {
        validateLocation();
    }, [location]);

    useEffect(() => {
        handleEdit(editData);
    }, [isEditActive]);

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

    function submit(event: any) {
        event.preventDefault();
        setFormSubmitted(true);
        let isError = Object.values(error).filter((x: any) => x).length > 0;
        if (isError) {
            return;
        }
        let payload: empForm = { firstName, lastName, email, date, education, designation, techStack, location, remarks };
        // console.log(payload);
        handleSubmit(payload);
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
        setFormSubmitted(false);
        setError({});
        setEditActive(false);
    }

    function handleEdit(data: empForm) {
        if (isEditActive) {
            setFirstName(data?.firstName);
            setLastName(data?.lastName);
            setEmail(data?.email);
            setDate(data?.date);
            setEducation(data?.education);
            setDesignation(data?.designation);
            setTechstack(data?.techStack);
            setLocation(data?.location);
            setRemarks(data?.remarks);
        }
    }

    function validateFirstName(): void {
        if (!validators.NAME_REGEX.test(firstName)) {
            setError((prevData: any) => {
                return { ...prevData, firstName: 'Invalid First Name' }
            });
        } else {
            setError((prevData: any) => {
                return { ...prevData, firstName: null }
            });
        }
    }
    function validateLastName(): void {
        if (!validators.NAME_REGEX.test(lastName)) {
            setError((prevData: any) => {
                return { ...prevData, lastName: "Invalid Last Name" }
            });
        } else {
            setError((prevData: any) => {
                return { ...prevData, lastName: null }
            });
        }
    }
    function validateEmail(): void {
        if (validators.required(email)) {
            setError((prevData: Partial<empForm>) => {
                return { ...prevData, email: 'Email is required' }
            });
        } else if (validators.email(email)) {
            setError((prevData: Partial<empForm>) => {
                return { ...prevData, email: "Invalid Email" }
            });
        } else {
            setError((prevData: Partial<empForm>) => {
                return { ...prevData, email: null }
            });
        }
    }
    function validateDate(): void {
        const difference = msToYears(+new Date - +new Date(date));
        if (!date) {
            setError((prevData: any) => {
                return { ...prevData, date: 'Date is required' }
            });
        }
        else if (difference && (difference < validators.MIN_EMPLOYEE_AGE || difference > validators.MAX_EMPLOYEE_AGE)) {
            setError((prevData: any) => {
                return { ...prevData, date: 'Invalid date of birth' }
            });
        } else {
            setError((prevData: any) => {
                return { ...prevData, date: null }
            });
        }
    }
    function validateTechStack(): void {
        if (!techStack.length) {
            setError((prevData: any) => {
                return { ...prevData, techStack: 'Select atleast one option' }
            });
        } else {
            setError((prevData: any) => {
                return { ...prevData, techStack: null }
            });
        }
    }
    function validateLocation(): void {
        if (!location) {
            setError((prevData: any) => {
                return { ...prevData, location: 'Location is required' }
            });
        } else {
            setError((prevData: any) => {
                return { ...prevData, location: null }
            });
        }
    }


    return (
        <div className="employee-form">
            <h2>Employee form</h2>
            <form className='form' onSubmit={submit}>
                <InputText value={firstName} error={isFormSubmitted ? error.firstName : ''} setValue={setFirstName} label="First Name" placeholder="Enter your first name"></InputText>
                <InputText value={lastName} error={isFormSubmitted ? error.lastName : ''} setValue={setLastName} label="Last Name" placeholder="Enter your last name"></InputText>
                <InputText value={email} error={isFormSubmitted ? error.email : ''} setValue={setEmail} label="Email" placeholder="Enter your email"></InputText>
                <InputDate value={date} error={isFormSubmitted ? error.date : ''} setValue={setDate} label="Date of Birth"></InputDate>
                <SelectInput list={graduationList} value={education} setValue={setEducation} label="Select highest education"></SelectInput>
                <SelectInput list={designationList} value={designation} setValue={setDesignation} label="Select your designation"></SelectInput>

                <div className="form-field">
                    <label className="fs-12">Select your tech stack</label>
                    <div className="d-flex gap-20">
                        {techStackList.map((x: any) =>
                            <label className="cursor-pointer fs-14" htmlFor={x.value} key={x.id}>
                                <input onChange={(e: any) => handleTechStack(e.target.value)} checked={techStack?.includes(x.value)} type="checkbox" value={x.value} id={x.value} />{x.value}
                            </label>
                        )}
                    </div>
                    {(error.techStack && isFormSubmitted) && <span className="fs-10 error-msg">{error.techStack}</span>}
                </div>

                <div className="form-field">
                    <label className='fs-12'>Select your location</label>
                    <div className='d-flex gap-20'>
                        {locationTypeList.map((x: any) =>
                            <label key={x.id} className="cursor-pointer multiselect fs-14" htmlFor={x.value}>
                                <input onChange={() => setLocation(x.value)} checked={location == x.value} type="radio" value={x.value} id={x.value} />{x.value}
                            </label>
                        )}
                    </div>
                    {(error.location && isFormSubmitted) && <span className="fs-10 error-msg">{error.location}</span>}
                </div>

                <InputTextarea value={remarks} setValue={setRemarks} label="Any remarks?" placeholder="Remarks" cols={30} rows={5}></InputTextarea>

                <div className="form-field submit">
                    <button type="submit">Submit</button>
                    {isEditActive ? <button onClick={handleReset} className='reset-btn' type='button'>Reset</button> : ''}
                </div>
            </form>
        </div>

    )
}