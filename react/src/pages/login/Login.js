import "./login.css";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleloginClick(e) {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1>SIGN IN</h1>
        <form>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <button
                onClick={togglePasswordVisibility}
                className="password-button"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
          <button onClick={handleloginClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span>Something went wrong... </span>}
          <Link >Forgot Password</Link>
          <Link >Create a new Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
