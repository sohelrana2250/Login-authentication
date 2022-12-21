import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';


const SingUp = () => {

    const notify = () => toast('Successfully-Register');
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [register, setRegister] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate('/');

    const HandelRegistration = (event) => {

        event.preventDefault();

        const element = event.target;
        const name = element.name.value;
        const email = element.email.value;
        const password = element.password.value;
        const confirm = element.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }

        createUser(email, password).then((result) => {

            const user = result.user;
            UpdateProfileUser(name);
            console.log(user);
            setRegister(true);
            setError('');
            navigate('/');
            toast.success('Successfully-Register')
            element.reset();

        }).catch((error) => {

            setError(error.message);
        });

        const UpdateProfileUser = (name) => {

            const profile = { displayName: name };

            profileUpdate(profile).then(() => {

                console.log('Successfully-Update-Profile');
            }).catch((error) => {

                console.log(error.message);
            })


        }



    }
    return (
        <>

            <div className="hero  mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form onSubmit={HandelRegistration} style={{ width: '600px', height: '550px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered textarea textarea-success " />
                            </div>


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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm-Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Confirm-Password" className="input input-bordered textarea textarea-success" />
                            </div>




                            <div className="form-control mt-6">
                                <button onClick={notify} className="btn btn-outline btn-success">SingUp</button>
                                <Toaster />
                            </div>

                            <p className='text-center'>Already Have an Account <Link to='/login' className='text-red-600 font-bold text-xl'>Login</Link></p>
                            <div className='text-center'>
                                {
                                    register && <p className='text-3xl text-danger text-center'>Successfully Register</p>
                                }
                                {error && <p className='text-3xl text-center text-red-600'>{error}</p>}
                            </div>
                        </div>


                    </form>


                </div>
            </div>

        </>
    );
};

export default SingUp;