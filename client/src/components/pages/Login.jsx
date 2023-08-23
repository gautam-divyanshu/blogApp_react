import { NavLink } from "react-router-dom";
import axios from "axios"; // Import Axios
import md5 from "md5";

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/login", data);

      if (response.status === 200) {
        window.location.href = `/compose`;
      } else {
        window.location.href = "/register";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <div className="loginBody">
        <form className="row g-3" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="loginInput form-control"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="loginInput form-control"
            placeholder="Password"
          />
          <button className="btn custom-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="row g-3 googleOath">
          <NavLink to="/register" className="btn custom-navlink">
            Create an account
          </NavLink>
          <p>Or, continue with</p>
          <button className="btn btn-outline-danger" type="button">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
