import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(error=>console.error(error))
    }


    return (
        <div className='container'>
            <div className='border p-5'>
                <div className='  d-flex justify-content-center mt-5'>
                    <form onSubmit={handleSignIn} className=''>

                        <p>Email:</p>
                        <input className='w-100 p-3 rounded' name='email' type="email" />
                        <p>Password</p>
                        <input className='w-100 p-3 rounded' type="password" name="password" id="" />
                        <Button variant='success' type='submit' className='w-100 mt-3'>Submit</Button>

                        <p className='mt-3'>New to Hero Hotel? <Link to='/register'>Please Register</Link></p>
                        <Button onClick={handleGoogle} className='w-100 mt-3' variant='success'>Sign In with Google</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;