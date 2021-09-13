import { useState } from "react";
import { Link } from "react-router-dom";
import LabelInput from "../_share/LabelInput/LabelInput";

const AuthForm = ({ authType, cbOnSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        title="Email"
        name="email"
        value={email}
        placeholder="Input email..."
        cbOnChange={handleChange}
      />
      <LabelInput
        title="Password"
        name="password"
        value={password}
        placeholder="Input password..."
        cbOnChange={handleChange}
      />
      <button type="submit">
        {authType === "register" ? "SignUp" : "SignIn"}
      </button>
      <Link to={`/auth/${authType === "register" ? "login" : "register"}`}>
        {authType === "register" ? "SignIn" : "SignUp"}
      </Link>
    </form>
  );
};

export default AuthForm;
