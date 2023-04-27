import { useState } from 'react';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';
import EmailInput from '../../../inputFields/InputEmail';

export default function ForgotPassword() {

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [isFormSubmitted, setSubmit] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true);
        let isError = Object.values(errors).filter(x => x)?.length;
        if (!isError) {
            let payload = { email };
            console.log(payload);
        }
    }

    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Forgot Password</header>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <EmailInput
                            email={email}
                            setEmail={setEmail}
                            placeholder={"Enter your registered email"}
                            isFormSubmitted={isFormSubmitted}
                            errors={errors}
                            setErrors={setErrors}>
                        </EmailInput>
                    </div>
                    <input type="submit" className="button" defaultValue="Send Link" />
                </form>
                <div className="signup">
                    <span className="signup">
                        <Link to={'/auth/login'}>
                            <label htmlFor="check"> Back to login</label>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}