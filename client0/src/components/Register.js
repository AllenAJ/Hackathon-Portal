import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: "ra@gmail.com",
        password: "ra@gmail.com",
        first_name: "",
        last_name: "",
        status:"active",
        user_type:"student",
        ph_no:""
      });
      const { email, password, first_name, last_name, status, user_type, ph_no} = inputs;
      const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      
      const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = {email, password, first_name, last_name, status, user_type, ph_no};
          const response = await fetch(
            "http://localhost:5000/auth/register",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
          const parseRes = await response.json();
          if(parseRes.token){
            localStorage.setItem("token",parseRes.token);
            setAuth(true);
            toast.success("Registered successfully!");
            <ToastContainer />
          }else{
            setAuth(false);
            toast.error(parseRes);
            <ToastContainer />
          }

        }catch(err){
            console.error(err.message);
        }}
  
    return (
    <Fragment>
      <h1 className="mt-5 pt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="first_name"
          value={first_name}
          placeholder="first_name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="last_name"
          value={last_name}
          placeholder="last_name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="ph_no"
          value={ph_no}
          placeholder="ph_no"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">login</Link>
    </Fragment>
  );
};

export default Register;