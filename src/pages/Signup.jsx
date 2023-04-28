import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      username,
      password,
    };
    try {
      await signupService(newUser);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 400) {
        seterrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div className="loginCentradito">
      <br />
      <h1 className="bold">Registro</h1>
      <form onSubmit={handleSignup}>
        <label className="label">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label className="label">Nombre de usuario:</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <br />

        <label className="label">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        {errorMessage !== "" ? <p>{errorMessage}</p> : null}

        <button id="buttonAuth" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Signup;
