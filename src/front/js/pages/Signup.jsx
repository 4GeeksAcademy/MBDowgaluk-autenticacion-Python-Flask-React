import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Signup = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const { store, actions } = useContext(Context);

    const handleOnClick = async () => {
        const url = process.env.BACKEND_URL + "/api/signup";
        const options = {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers:{
                "Content-Type": "application/json"
            },   
        };
        const response = await fetch(url, options);
        if (!response.ok){
            console.log(response.status, response.statusText);
            console.log(email, password)
        }
        const data = await response.json();
        actions.login(data.access_token)
       // localStorage.setItem("token", data.access_token);
        console.log(data);
        console.log(response)
    }

    return(
        store.isLoggedIn ? <Navigate to='/private' /> :
        <div>
            <h1 className="text-center">Signup</h1>
            <h4 className="text-center">Create user</h4>
            <div className="m-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email} onChange={(e) => setEmail(e.target.value)}></input>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className="btn btn-success m-2" onClick={handleOnClick}>Signup</button>
            </div>
        </div>
    )
}