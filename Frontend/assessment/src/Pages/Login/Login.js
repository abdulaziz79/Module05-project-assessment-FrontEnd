import React, { useState } from 'react';
import Styles from "./Login.module.css"
import { toast } from "react-toastify";
import axios from "axios"
// import { useContext } from 'react';
// import { UserContext } from '../../UserContext/UserContext';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

//   const { fetchUserData }=useContext(UserContext)
  const [formData, setFormData]= useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()

  const handlInputChange=(e)=>{
    const {name, value}=e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your email.");
      return;
    };

    if (!formData.password) {
      toast.error("Please enter your password.");
      return;
    };

    try {
      const response= await axios.post(`http://localhost:5000/user/login`,
      formData,
      {withCredentials:true}
      );
      console.log(response)
      if(response.data){
        // await fetchUserData()
        // toast.success("Login successfully");
        console.log("login successful")
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      }
    } catch (error) {
      console.log(error.message)
    }
  };



  return (
    <div className={Styles.body}>
    <div className={Styles.container}>
      <h2 className={Styles.h2}>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
          className={Styles.inpt}
            type="email"
            name="email"
            value={formData.email}
            onChange={handlInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
          className={Styles.inpt}
            type="password"
            name='password'
            value={formData.password}
            onChange={handlInputChange}
          />
        </label>
        <br />
        <button type="submit" className={Styles.btn}>Login</button>
        <button type="submit" className={Styles.googleBtn}>Login with google</button>
        <p style={{ letterSpacing:"1px",color:"white", }}>Already have an account?  </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
