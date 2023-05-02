import React from 'react';
import './Register.css';
import RegisterImage from '../../assets/images/register.jpg';

const Register = () => {
    return (
        <div className='login container'>
            <div>
                <form>
                    <h3>Please Register as New</h3>
                    <hr />
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Photo URL</label>
                        <input type="text" name='photoURL' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>
            </div>
            <div>
                <div className='login-image'>
                    <img src={RegisterImage} height={100} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
}

export default Register;
