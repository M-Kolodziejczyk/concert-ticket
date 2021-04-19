import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

import validate from "../../validators/sign-in";

import useForm from "../../hooks/useForm";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import SuccessMessage from "../success-message/success-message.component";
import ErrorMessage from "../error-message/error-message.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "", password: "" },
    validate,
    emailSignInStart
  );

  const handleGoogleStart = () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="signinPage">
      <h2>I already have an account</h2>
      <span className="span">Sign in with your email and password</span>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
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
          <Link className="form__link" to="/forgot-password">
            Forgot password?
          </Link>
          <div className="form__btnGroup">
            <CustomButton type="submit" name="submit">
              Signin
            </CustomButton>
            <CustomButton type="button" isGoogleBtn onClick={handleGoogleStart}>
              Sign in with Google
            </CustomButton>
          </div>
          {errorMessage?.signin && (
            <ErrorMessage>{errorMessage.signin}</ErrorMessage>
          )}
          {successMessage?.signin && (
            <SuccessMessage>{successMessage.signin}</SuccessMessage>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
