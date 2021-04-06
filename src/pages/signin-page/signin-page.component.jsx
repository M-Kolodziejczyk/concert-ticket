import React, { useState } from "react";

import "./signin-page.styles.scss";

const SigninPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit, credentials: ", userCredentials);
  };

  return (
    <div className="signinPage">
      <h1>Signin Page</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Email:"
              value={userCredentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
              value={userCredentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input type="submit" value="SUBMIT" name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
