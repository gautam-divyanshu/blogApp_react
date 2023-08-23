import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        registerData
      );

      if (response.status === 200) {
        window.location.href = "/";
      } else {
        setInvalidEmail(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="loginBody">
        <form className="row g-3" onSubmit={handleSubmit}>
          <input
            type="email"
            className={`loginInput form-control ${
              invalidEmail ? "is-invalid" : ""
            }`}
            placeholder="Email"
            name="email" // Make sure this matches the state key
            value={registerData.email}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">
            Email is already registerd!
          </div>

          <input
            type="password"
            className="loginInput form-control"
            placeholder="Password"
            name="password" // Make sure this matches the state key
            value={registerData.password}
            onChange={handleInputChange}
          />

          <button className="btn custom-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
