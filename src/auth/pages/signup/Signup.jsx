import { useEffect, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Validators from '../../../utility/Validators';
import ErrorMessage from '../../../utility/ErrorMessage';

export default function Signup() {

    const validator = new Validators();
    const errorMessage = new ErrorMessage();

    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormSubmitted, setSubmit] = useState(false);

    useEffect(() => {
        validateName();
    }, [name]);

    useEffect(() => {
        validateEmail();
    }, [email]);

    useEffect(() => {
        validatePassword();
    }, [password]);

    function validateName() {
        if (validator.required(name)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'required' }
            });
        } else if (validator.minLength(name, 3)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'minlength' }
            });
        } else if (validator.maxLength(name, 20)) {
            setErrors((prevError) => {
                return { ...prevError, name: 'maxlength' }
            });
        } else {
            setErrors((prevError) => {
                return { ...prevError, name: null }
            });
        }
    }

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

    function validatePassword() {
        if (validator.required(password)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'required' }
            });
        } else if (validator.minLength(password, 8)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'minlength' }
            });
        } else if (validator.maxLength(password, 16)) {
            setErrors((prevError) => {
                return { ...prevError, password: 'maxlength' }
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

    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true);

    }


    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Signup</header>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <input onInput={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter your name" />
                        {isFormSubmitted && <div className="error-msg">
                            {errors?.name == 'required' && errorMessage.required('Name')}
                            {errors?.name == 'minlength' && errorMessage.minLength(3)}
                            {errors?.name == 'maxlength' && errorMessage.maxLength(20)}
                        </div>}
                    </div>
                    <div className="form-field">
                        <input onInput={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Enter your email" />
                        <div className="error-msg">
                            {errors?.email && errorMessage.required('Email')}
                        </div>
                    </div>
                    <div className="form-field">
                        <input onInput={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" />
                        <div className="error-msg">
                            {errors?.password && errorMessage.required('Password')}
                        </div>
                    </div>
                    <input type="submit" className="button" defaultValue="Signup" />
                </form>
                <div className="signup">
                    <span className="signup">
                        Already have an account?
                        <Link to={'/auth/login'}>
                            <label htmlFor="check"> Login</label>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}