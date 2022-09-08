import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";

function Register() {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  const handelChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handelChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handelChangeButton = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "Registration succeeds. You are now redirected to the login page."
        );
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handelChangeUsername}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            onChange={handelChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handelChangePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">role</label>
          <input
            onChange={handelChangeRole}
            type="text"
            className="form-control"
            name="role"
          />
        </div>
        <br />
        <button onClick={handelChangeButton} className="btn btn-secondary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
