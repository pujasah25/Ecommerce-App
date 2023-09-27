import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useState, useEffect } from "react";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {
  const [inputVal, setInputVal] = useState(initialValues);

  const navigate = useNavigate();
  function handleInputChange(e) {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  }

  console.log(inputVal);

  const { firstName, lastName, username, email, password, cpassword } =
    inputVal;

  const validatePassword = () => password === cpassword;


  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputVal);
    // try {
    //   await axios.post("auth/register", inputVal);
    //   navigate("/login");
    // } catch (err) {}
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={firstName}
            name="firstName"
            placeholder="first name"
            onChange={handleInputChange}
          />
          <input
            value={lastName}
            name="lastName"
            placeholder="last name"
            onChange={handleInputChange}
          />
          <input
            value={username}
            name="username"
            placeholder="username"
            onChange={handleInputChange}
          />
          <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={handleInputChange}
          />
          <input
            type="password"
            value={cpassword}
            name="cpassword"
            placeholder="confirm password"
            onChange={handleInputChange}
            style={{ borderColor: validatePassword() ? "green" : "red" }}
          />

          {!validatePassword() && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
          
          <span>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
          <div>
            <p>
              Already have an account ? <Link to="/login"> Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
