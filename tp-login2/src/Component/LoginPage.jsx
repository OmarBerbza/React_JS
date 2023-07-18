import React, { useState } from 'react'
import AdminPage from './AdminPage';

function LoginPage(props) {
    const [login, setLogin] = useState({email: "", password: ""});
    const [loged, setLoged] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setLogin((pre)=>{
            return{...pre, [name]: value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const userFound = props.data.find((d)=> d.user_email === login.email);

        if(userFound){
            if(userFound.pass == login.password ){
                setMessage({});
                setLoged(true);
            }else{
                setMessage("Somthing went wrong!")
            }
        }
    }
        
  return loged ? (
        <AdminPage/>
    ) : (
    <div className='login-form'>
        <h2 className='text-center'>Log In</h2>
        <form className='border border-success border-opacity-25 rounded' onSubmit={handleSubmit}>
            <div className="mb-3 input-container w-50">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={login.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 input-container w-50">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={login.password} onChange={handleChange} id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-outline-success"><b>Submit</b></button>

            <h5 className='text-danger mt-4'>{message}</h5>
        </form>
    </div>
  )
}

export default LoginPage