import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import validate from "../../validators/signupFormValidationRules";

import useForm from "../../hooks/useForm";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import MessageSuccess from "../message-success/message-success.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "", password: "", password2: "" },
    validate,
    signUpStart
  );

  return (
    <div className="signupPage">
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
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
          <div className="form__buttons">
            <CustomButton type="submit" name="submit">
              Signup
            </CustomButton>
            <Link to="/confirm-account" className="form__link">
              Go to confirm account
            </Link>
          </div>
          {errorMessage?.signup && (
            <span className="form-error-message">{errorMessage.signup}</span>
          )}
          {successMessage?.signup && (
            <MessageSuccess>{successMessage.signup}</MessageSuccess>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
