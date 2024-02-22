import { useContext, useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { authContext } from "../Context/AuthenticationProvider";

export default function Register() {

  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const auth = useContext(authContext);
  console.log("here is the auth context object", auth);

  const [data, setData] = useState("");

  const { username, password } = data;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const registration = async () => {
    try {
      await auth.registration(registrationData);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space">
      <div className="custom-form-container" style={{ borderRadius: "1rem" }}>

        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" >
                    <div className="card-body p-5 text-center">
                        <div>
                            <h3 className="mb-5">Registration</h3>
                                                    <div className="form-outline mb-4">
                                                        <input 
                                                        type="text" 
                                                        className="form-control form-control-lg"
                                                        name="username"
                                                        value={username}
                                                        onChange={handleChange} 
                                                        placeholder="Desired user"
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                            <input 
                                                            type="text" 
                                                            className="form-control form-control-lg"
                                                            name="password"
                                                            value={password}
                                                            onChange={handleChange} 
                                                            placeholder="Password"
                                                            />
                                                    </div>
                                                    <br></br>
                                                    <button className="registration-button" type="submit" onClick={registration}>Registrate</button>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
    

    

  );
}

