import React from "react";
import { useSelector } from "react-redux";
import validate from "../../validators/forgot-password";
import { forgotPasswordStart } from "../../redux/user/user.actions";

import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import SuccessMessage from "../success-message/success-message.component";
import ErrorMessage from "../error-message/error-message.component";

import "./forgot-password.styles.scss";

const ForgotPassword = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "" },
    validate,
    forgotPasswordStart
  );

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={handleChange}
            value={values.email}
            error={errors.email}
          />
          <div className="form__buttons">
            <CustomButton type="submit" name="submit">
              Resend Code
            </CustomButton>
          </div>
          {errorMessage.forgotPassword && (
            <ErrorMessage>{errorMessage.forgotPassword}</ErrorMessage>
          )}
          {successMessage?.forgotPassword && (
            <SuccessMessage>{successMessage.forgotPassword}</SuccessMessage>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
