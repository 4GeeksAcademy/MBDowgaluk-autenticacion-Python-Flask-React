import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Authentication system</h1>
			<div className="container text-center">
			<div className="row">
			<div className="card my-2">
  				<div className="card-body">
    				<p className="card-text">Don't have an account created? Click "signup" to create one!</p>
  				</div>
				<Link to="/signup">
					<button className="btn btn-primary btn-lg m-3">Signup</button>
				</Link>
			</div>
			<div className="card my-2">
  				<div className="card-body">
    				<p className="card-text">If you already have an account created, access it by clicking on "Login"</p>
  				</div>
				<Link to="/login">
					<button className="btn btn-success btn-lg m-3">Login</button>
				</Link>
			</div>
			</div>
			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			
		</div>
	);
};
