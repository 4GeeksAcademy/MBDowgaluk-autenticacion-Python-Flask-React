import React, { useState } from "react";

export const Login = () =>{
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleOnClick = async () => {

    }

    return(
        <div>
            <h1 className="text-center">Login</h1>
            <button className="btn btn-success m-2" onClick={handleOnClick}>Login</button>
        </div>
    )
}