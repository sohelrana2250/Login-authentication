import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const notify = () => toast('Successfully-Login ');


    const { Login, GoogleSingIn } = useContext(AuthContext)
    const [LogiInerror, setError] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handelGoogleSingIn = () => {

        GoogleSingIn().then((result) => {

            const user = result.user;
            console.log(user);
            setLogin(true);
            setError('');
            navigate('/');
            toast.success('Successfully-Login')


        }).catch((error) => {
            //console.log(error.message)
            setError(error.message);
        })


    }

    const HandelLogin = (event) => {

        event.preventDefault();

        const element = event.target;

        const email = element.email.value;
        const password = element.password.value;

        Login(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            setLogin(true);
            setError('');
            navigate('/');
            element.reset();
        }).catch((error) => {
            //console.log(error.message)
            setError(error.message);
        })





    }
    return (
        <>

            <div className="hero  mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form onSubmit={HandelLogin} style={{ width: '600px', height: '500px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control mt-6">
                                <button onClick={notify} className="btn btn-outline btn-success">LOGIN</button>
                                <Toaster />
                            </div>

                            <div className="form-control mt-6">
                                <button onClick={handelGoogleSingIn} className="btn btn-outline btn-accent">Sing-In-With-Google</button>
                            </div>

                            <p className='text-center'>New to Inventory Store <Link to='/SingUp' className='text-red-600 font-bold text-xl'>Create a New Account</Link></p>
                            <div className='text-center'>
                                {
                                    login && <p className='text-3xl text-danger text-center'>Successfully Login</p>
                                }
                                {LogiInerror && <p className='text-3xl text-center text-red-600'>{LogiInerror}</p>}
                            </div>
                        </div>



                    </form>


                </div>
            </div>

        </>
    );
};

export default Login;