import React, { useState } from "react";
import './Login.css';
import axios from "axios";

 export default function Login() {
 
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const submitHandler = async (e) => {
         e.preventDefault();
         try{
           const {data} = await axios.post('./frontend/containers/Login/Login.js', {
             email,
             password
           });
           console.log(email);
           console.log(data);
         }catch(err) {
           console.log("eroare");
         }
     }
    
  //   useEffect(() => {
  //     const fetchData = async() => {
  //       const result = await axios.get('/api/login');
  //       setCoaches(result.data);
  //     };
  //     fetchData();
  // }, []);

    return (
       <div className="log">
         <div className="auth-form-container">
             <h2>Log in</h2>
             <form className="login-form" onSubmit={submitHandler}>
                 <label htmlFor="email">email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                 <label htmlFor="password">password</label>
                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                 <button type="submit"> Log In </button>
             </form>
         </div>
       </div>
     
    )
} 


