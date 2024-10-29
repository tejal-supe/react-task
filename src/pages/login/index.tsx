import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchUser } from "../../redux/userSlicer";
import { AppDispatch } from "../../redux/store";

import "./index.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };
  const userDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const redirectBasedOnRole = () => {
    dispatch(fetchUser());
      navigate("/dashboard")
  };
  return (
    <div className="container border login-outDiv">
      <div className="row">
        <div className="col">
          <img
            src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
            alt="login"
            height="500px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col">
          <div className="container p-4 my-5">
            <h3>Welcome, Again</h3>
            <form className="p-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  value={loginDetails.email}
                  onChange={userDetails}
                />
              </div>
              <div className="mb-3 pt-3 passDiv ">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={loginDetails.password}
                  name="password"
                  onChange={userDetails}
                />
                <span className="showpass" onClick={showHidePassword}>
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <button className="btn btn-primary" onClick={redirectBasedOnRole}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
