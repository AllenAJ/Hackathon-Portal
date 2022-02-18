import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";


// notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Login = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "test",
    password: "test"
  });

   const { email, password } = inputs;

   const onChange = (e) =>
   setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
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
        toast.success("logged in successfully!");
        <ToastContainer />
      }else{
        setAuth(false);
        toast.error(parseRes);
        <ToastContainer />
      }


      
    }catch(err){
        console.error(err.message);
    }}

  

//       if (parseRes.jwtToken) {
//         localStorage.setItem("token", parseRes.jwtToken);
//         setAuth(true);
//         toast.success("Logged in Successfully");
//       } else {
//         setAuth(false);
//         toast.error(parseRes);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
    const notify = () => toast("Wow so easy!");

  return (
    <Fragment>
      <section class="u-clearfix u-image u-section-2"> 
      
      <form className="login-form" onSubmit={onSubmitForm}>
      <h1 className="mt-5 pt-5 text-center">Login</h1>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register">register</Link>
      </section>
    </Fragment>
  );
};

export default Login;