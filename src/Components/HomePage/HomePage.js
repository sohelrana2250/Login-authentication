import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import image from '../Image/MyPic.jpg'


const HomePage = () => {

    // const { user, LogOut } = useContext(AuthContext);

    const { user, LogOut } = useContext(AuthContext);

    console.log(user?.displayName);

    const handelLogOut = () => {

        LogOut().then(() => {

        }).catch((error) => {
            console.log(error.message);
        })
    }

    const menuItem = <React.Fragment>
        <li className='font-bold text-rose-600 text-xl'><Link>{user?.displayName}</Link></li>
        <li><Link className='btn btn-outline btn-primary ml-3' to='/'>Home</Link></li>
        <li><Link className='btn btn-outline btn-primary  ml-3' to='/register'>Register</Link></li>


        {
            user?.email ? <>
                <li ><Link className="btn btn-outline btn-error  ml-3" onClick={handelLogOut}> LogOut</Link></li>
                <li><Link className='btn btn-outline btn-primary  ml-3' to='/about'>About</Link></li>

            </> : <>
                <li><Link className='btn btn-outline btn-primary  ml-3' to='/SingUp'>SingUp</Link></li>
                <li><Link className='btn btn-outline btn-primary  ml-3' to='/login'>Login</Link></li>



            </>
        }

    </React.Fragment>

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItem}
                    </ul>
                </div>


                <div className="avatar m-3 ">
                    <div style={{ width: '50px', height: '50px' }} className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {menuItem}

                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link to='/contectMe' className="btn btn-outline btn-success">Conatct Me</Link> */}
            </div>
        </div>
    );
};

export default HomePage;