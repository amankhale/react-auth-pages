import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import NameInput from '../../../inputFields/InputName';
import EmailInput from '../../../inputFields/InputEmail';
import PasswordInput from '../../../inputFields/InputPassword';

export default function Signup() {

    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormSubmitted, setSubmit] = useState(false);

    /**
     * Function to submit form values
     * @param {*} event Submit event
     */
    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true);
        let isError = Object.values(errors).filter(x => x)?.length;
        if (!isError) {
            // Submit to api

            let payload = {name, email, password};
            console.log(payload);
        }
    }

    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Signup</header>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <NameInput
                            value={name}
                            isFormSubmitted={isFormSubmitted}
                            placeholder={"Enter your name"}
                            setValue={setName}
                            errors={errors}
                            setErrors={setErrors}>
                        </NameInput>
                    </div>
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
                        <PasswordInput
                            password={password}
                            isFormSubmitted={isFormSubmitted}
                            placeholder={"Enter password"}
                            setPassword={setPassword}
                            errors={errors}
                            setErrors={setErrors}>
                        </PasswordInput>
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