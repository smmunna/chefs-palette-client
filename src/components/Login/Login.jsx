import React, { useContext, useEffect } from 'react';
import LoginImage from '../../assets/images/login.jpg';
import './Login.css';
import Google from '../../assets/icons/google.png';
import Github from '../../assets/icons/github.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    // creating the hooks for redirect to other page;
    const navigate = useNavigate()

    const { googleSignIn, user, error, loading } = useContext(AuthContext);

    // Redirecting to other page;
    useEffect(() => {
        if (!loading && user) {
            navigate("/")
        }
    }, [user])

    return (
        <div className='login container'>
            <div>
                <form>
                    <h3>Please Login</h3>
                    <hr />
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <hr />
                <div>
                    <p>If you don't have account <Link to="/register" className='sublink'>Register Now</Link> or 👇 </p>
                </div>
                <div className='text-center'>
                    <div className='google'><img src={Google} height={20} className='me-2' alt="" /><span onClick={googleSignIn}>Sign in with Google</span></div>
                    <div className='github'><img src={Github} height={20} className='me-2' alt="" /><span>Sign in with Github</span></div>
                </div>
            </div>
            <div>
                <div className='login-image'>
                    <img src={LoginImage} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
