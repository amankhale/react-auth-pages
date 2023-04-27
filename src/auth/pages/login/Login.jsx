import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Login</header>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <input type="password" placeholder="Enter your password" required />
                    <Link to={'/auth/forgot-password'}>Forgot password?</Link>
                    <input type="submit" className="button" defaultValue="Login" />
                </form>
                <div className="signup">
                    <span className="signup">
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