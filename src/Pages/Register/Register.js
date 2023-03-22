import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(result => {
                        console.log(result)
                        navigate('/login')
                    })
                    .catch(error => console.error(error))

            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <div className=' border p-5 d-flex justify-content-center mt-5'>
                <form className='' onSubmit={handleSignUp}>
                    <div className='form-control border-0'>
                        <p>Name:</p>
                        <input className='w-100 p-3 rounded' name='name' type="text" />
                    </div>

                    <div className='form-control border-0'>
                        <p>Email:</p>
                        <input className='w-100 p-3 rounded' name='email' type="email" />
                    </div>
                    <div className='form-control border-0'>
                        <p>Password</p>
                        <input className='w-100 p-3 rounded' type="password" name="password" id="" />
                    </div>
                    <Button variant='success' type='submit' className='w-100 mt-3'>Submit</Button>

                    <p className='mt-3'>Already Have An Account? <Link to='/login'>Please Sign In</Link></p>
                    <Button onClick={handleGoogle} className='w-100 mt-3' variant='success'>Sign In with Google</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;