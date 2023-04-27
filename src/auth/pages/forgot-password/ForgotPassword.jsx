import './ForgotPassword.css';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Forgot Password</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="button" className="button" defaultValue="Send Link" />
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