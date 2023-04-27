import ErrorMessage from "../utility/ErrorMessage";
import { useEffect, useState } from "react";
import Validators from "../utility/Validators";

export default function PasswordInput({ password, isFormSubmitted, placeholder, setPassword, errors, setErrors }) {

    useEffect(() => {
        validatePassword();
    }, [password]);

    const errorMessage = new ErrorMessage();
    const validator = new Validators();

    function validatePassword() {
        if (validator.required(password)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'required' }
            });
        } else if (validator.password(password)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'pattern' }
            });
        } else {
            setErrors((prevError) => {
                return { ...prevError, password: null }
            });
        }
    }

    return (
        <>
            <input className={(errors?.password && isFormSubmitted) ? "input-invalid" : ""} onInput={(e) => setPassword(e.target.value)} value={password} type="password" placeholder={placeholder} />
            {isFormSubmitted && <div className="error-msg">
                {errors?.password == 'required' && errorMessage.required('Password')}
                {errors?.password == 'pattern' && errorMessage.password()}
            </div>}
        </>
    )
}