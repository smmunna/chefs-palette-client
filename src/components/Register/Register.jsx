import React, { useContext, useState } from 'react';
import './Register.css';
import RegisterImage from '../../assets/images/register.jpg';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const { createUser, userUpdate } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [urlerror, setUrlError] = useState(null)
    const [regerror, setRegError] = useState(null)

    const navigate = useNavigate()


    // Form Submission;
    const handleFormSubmit = (event) => {
        event.preventDefault()

        // Getting value from the form
        const form = event.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        // Password Validation;
        if (password.length < 6) {
            const errorMessage = "Password Length Must be 6 character Long !"
            setError(errorMessage);
            return
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            const errorMessage = "Add At least two Uppercase !"
            setError(errorMessage);
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            const errorMessage = "Add At least One Special Character (!@#&*) !"
            setError(errorMessage);
            return
        }
        else {
            setError('')
        }


        // createUser(email,password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // After Creating the user we need to call userUpdate;
                userUpdate(user, displayName, photoURL)

            })
            .catch(regerror => {
                const error = regerror.errorMessage;
                setRegError(error)
            })

        // After registraation go to home;
        navigate('/')
    }

    return (
        <div className='login container mt-3 mt-md-0'>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <h3>Please Register as New</h3>
                    <p>{regerror?'Error occurs in the registration':''}</p>
                    <hr />
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name='displayName' className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" required placeholder='Hint- !AB1234' />
                        {error ? <p className='text-danger mt-2'>{error}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Photo URL</label>
                        <input type="text" name='photoURL' className="form-control" required />
                        {urlerror ? <p className='text-danger mt-2'>{urlerror}</p> : ''}
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
