import './Login.css';
import { Link } from 'react-router-dom';
import EmailInput from '../../../inputFields/InputEmail';
import { useEffect, useState } from 'react';
import Validators from '../../../utility/Validators';
import ErrorMessage from '../../../utility/ErrorMessage';

export default function Login() {

    const validators = new Validators();
    const errorMessage = new ErrorMessage();

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormSubmitted, setSubmit] = useState(false);

    useEffect(() => {
        validatePassword();
    }, [password]);

    /**
     * Function to validate password form field
     */
    function validatePassword() {
        if (validators.required(password)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'required' };
            });
        } else {
            setErrors((prevError) => {
                return { ...prevError, password: null };
            });
        }
    }

    /**
     * Function to submit form values
     * @param {*} event Submit event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true);
        let isError = Object.values(errors).filter(x => x)?.length;
        if (!isError) {
            let payload = { email, password };
            console.log(payload);
        }
    }

    return (
        <div className="container">
            <div className="login form">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <EmailInput
                            email={email}
                            isFormSubmitted={isFormSubmitted}
                            placeholder={"Enter your email"}
                            setEmail={setEmail}
                            errors={errors}
                            setErrors={setErrors}>
                        </EmailInput>
                    </div>
                    <div className="form-field">
                        <input className={(errors?.password && isFormSubmitted) ? "input-invalid" : ""} value={password} onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                        {
                            isFormSubmitted && <div className="error-msg">
                                {errors?.password == 'required' && errorMessage.required('Password')}
                            </div>
                        }
                    </div>
                    <Link to={'/auth/forgot-password'}>Forgot password?</Link>
                    <button type="submit" className="button mt-2">Login</button>
                </form>
                <div className="signup">
                    <span className="signup fs-12">
                        Don't have an account?
                        <Link to={'/auth/signup'}>
                            <label htmlFor="check"> Signup</label>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}