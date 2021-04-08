import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import validate from "../../validators/signupFormValidationRules";

import useHandleChange from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./sign-up.styles.scss";

const SignUpPage = () => {
  let history = useHistory();
  const pushRoute = useSelector((state) => state.user.pushRoute);
  const errorMessage = useSelector((state) => state.user.error);

  const { handleChange, handleSubmit, values, errors } = useHandleChange(
    { email: "", password: "", password2: "" },
    validate,
    signUpStart
  );

  useEffect(() => {
    if (pushRoute) {
      history.push(`${pushRoute}`);
    }
  }, [pushRoute, history]);

  return (
    <div className="signupPage">
      <h1>Sign up</h1>
      <div className="container">
        <form onSubmit={handleSubmit} className="signupPage__form">
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={handleChange}
            value={values.email}
            error={errors.email}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={handleChange}
            value={values.password}
            error={errors.password}
          />
          <FormInput
            name="password2"
            type="password"
            label="Confirm password"
            handleChange={handleChange}
            value={values.password2}
            error={errors.password2}
          />
          <div className="form__group">
            <CustomButton type="submit" name="submit">
              Signin
            </CustomButton>
          </div>
          {errorMessage && (
            <span className="form-error-message">{errorMessage}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
