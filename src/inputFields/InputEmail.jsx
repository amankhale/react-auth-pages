import ErrorMessage from "../utility/ErrorMessage";
import { useEffect, useState } from "react";
import Validators from "../utility/Validators";

export default function EmailInput({ email, setEmail, isFormSubmitted, placeholder, errors, setErrors }) {

    useEffect(() => {
        validateEmail();
    }, [email]);

    const errorMessage = new ErrorMessage();
    const validator = new Validators();

    /**
     * Function to validate email form field
     */
    function validateEmail() {
        if (validator.required(email)) {
            setErrors((prevError) => {
                return { ...prevError, email: 'required' }
            });
        } else if (validator.email(email)) {
            setErrors((prevError) => {
                return { ...prevError, email: 'pattern' }
            });
        } else {
            setErrors((prevError) => {
                return { ...prevError, email: null }
            });
        }
    }

    return (
        <>
            <input className={(errors?.email && isFormSubmitted) ? "input-invalid" : ""} onInput={(e) => setEmail(e.target.value)} value={email} type="text" placeholder={placeholder} />
            {isFormSubmitted && <div className="error-msg">
                {errors?.email == 'required' && errorMessage.required('Email')}
                {errors?.email == 'pattern' && errorMessage.invalid('Email')}
            </div>}
        </>
    )
}