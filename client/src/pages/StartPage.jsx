import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


import Login from '../components/login/Login';
import Signup from '../components/signup/Signup'

function StartPage() {
    const [form, setForm] = useState(true)

    if (localStorage.getItem("Token")){
        return <Redirect to='/home' /> 
    }
    
    const changeForm = (resp) => {
        return setForm(resp)
    }



    return (
        <>

            <nav className="navbar navbar-light bg-dark">
                <h3 className='d-flex bg-transparent text-light text-50 mx-3'> iNOTEBOOK</h3>
                <div className='d-flex gap-4 my-2 mx-3'>
                    <button type="button" className="btn btn-primary    "   onClick={(e)=>changeForm(false)}>signup</button> 
                    <button type="button" className="btn btn-primary   "   onClick={(e)=>changeForm(true)}>Login</button>
                </div>
            </nav>
            {form ? <Login /> : <Signup />}



        </>
    )
}

export default StartPage;
// signupOrLoginBtnChange