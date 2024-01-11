import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Profile = () =>{
    const { store, actions } = useContext(Context);

    const handleOnClick= () => actions.logout();

    return(
        !store.isLoggedIn ? <Navigate to='/login' /> :
        <div>
            <h1 className="text-center">Profile</h1>
            <div className="card text-center m-3">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                </div>
                <div className="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>
            <div className="text-center">
                <button href="#" className="btn btn-danger" onClick={handleOnClick}>Log out</button>
            </div>
        </div>
    )
}