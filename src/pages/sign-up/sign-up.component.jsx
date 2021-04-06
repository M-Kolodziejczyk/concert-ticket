import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUpPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const pushRoute = useSelector((state) => state.user.pushRoute);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (pushRoute) {
      history.push(`${pushRoute}`);
    }
  }, [pushRoute, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpStart(userCredentials));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signupPage">
      <h1>SignUp Page</h1>
      <div className="signupPage__container">
        <form onSubmit={handleSubmit} className="signupPage__form">
          <div className="signupPage__group">
            <input
              className="signupPage__input"
              type="email"
              name="email"
              placeholder="Email: "
              value={userCredentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="signupPage__group">
            <input
              className="signupPage__input"
              type="password"
              name="password"
              placeholder="Password: "
              value={userCredentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="signupPage__group">
            <input type="submit" value="SUBMIT" name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
