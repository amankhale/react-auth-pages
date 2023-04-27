import ErrorMessage from "../utility/ErrorMessage";
import { useEffect } from "react";
import Validators from "../utility/Validators";

export default function NameInput({ value, isFormSubmitted, placeholder, setValue, errors, setErrors }) {

    useEffect(() => {
        validateValue();
    }, [value]);

    const errorMessage = new ErrorMessage();
    const validator = new Validators();

    function validateValue() {
        if (validator.required(value)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'required' }
            });
        } else if (validator.minLength(value, 3)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'minlength' }
            });
        } else if (validator.maxLength(value, 20)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'maxlength' }
            });
        } else {
            setErrors((prevError) => {
                return { ...prevError, name: null }
            });
        }
    }

    return (
        <>
            <input className={(errors?.name && isFormSubmitted) ? "input-invalid" : ""} onInput={(e) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder} />
            {
                isFormSubmitted && <div className="error-msg">
                    {errors?.name == 'required' && errorMessage.required('Name')}
                    {errors?.name == 'minlength' && errorMessage.minLength(3)}
                    {errors?.name == 'maxlength' && errorMessage.maxLength(20)}
                </div>
            }
        </>
    )
}