import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import validate from "../../validators/confirm-sign-up";

import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import SuccessMessage from "../success-message/success-message.component";
import ErrorMessage from "../error-message/error-message.component";

import "./confirm-sign-up.styles.scss";

const ConfirmSignUp = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "", code: "" },
    validate
    // signUpStart
  );

  return (
    <div className="confirm">
      <h2>Confirm your email</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <FormInput
          name="code"
          type="text"
          label="Confirm code"
          handleChange={handleChange}
          value={values.code}
          error={errors.code}
        />
        <div className="form__buttons">
          <CustomButton type="submit" name="submit">
            Confirm Email
          </CustomButton>
          <Link to="/signin" className="form__link">
            Go to sign in
          </Link>
        </div>
        {errorMessage.confirmSignup && (
          <ErrorMessage>{errorMessage.confirmSignup}</ErrorMessage>
        )}
        {successMessage?.confirmSignup && (
          <SuccessMessage>{successMessage.confirmSignup}</SuccessMessage>
        )}
      </form>
    </div>
  );
};

export default ConfirmSignUp;
