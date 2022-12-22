import React from 'react';


const Register = () => {

    const HandelRegister = (event) => {




    }
    return (
        <>
            <h1 className='text-center text-3xl mt-5 font-bold text-green-900  '>Registration Form</h1>
            <div className="hero  mt-12">

                <div className="hero-content flex-col lg:flex-row-reverse">


                    <form onSubmit={HandelRegister} style={{ width: '600px', height: '1000px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name='firstName' placeholder="First Name" required className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last-Name</span>
                                </label>
                                <input type="text" name='lastName' placeholder="Last Name" required className="input input-bordered textarea textarea-success" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone-Number</span>
                                </label>
                                <input type="text" name='number' placeholder="Number" required className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">NID-Number</span>
                                </label>
                                <input type="text" name='NIDNumber' placeholder="NID-Number" required className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <select name='depertment' required className="select select-bordered w-full textarea textarea-success">
                                    <option>CSE</option>
                                    <option selected>CIS</option>
                                    <option>Physices</option>
                                    <option> Mathematices</option>
                                </select>

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">IS Residential</span>
                                </label>
                                <div className='textarea textarea-success'>
                                    <input className='ml-3' required type="radio" id="yes" name="fav_language" value="Yes" />
                                    <label className='ml-3' for="yes">Yes</label>
                                    <input className='ml-3' required type="radio" id="no" name="fav_language" value="No" />
                                    <label className='ml-3' for="no">No</label>
                                </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input type="text" name='birth' placeholder="Date of Birth" required className="input input-bordered textarea textarea-success" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Present -Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Present -Address" required className="input input-bordered textarea textarea-success" />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Save Button</button>

                            </div>




                            {/* <div className='text-center'>
                                {
                                    login && <p className='text-3xl text-danger text-center'>Successfully Login</p>
                                }
                                {LogiInerror && <p className='text-3xl text-center text-red-600'>{LogiInerror}</p>}
                            </div> */}
                        </div>



                    </form>


                </div>
            </div>


        </>
    );
};

export default Register;