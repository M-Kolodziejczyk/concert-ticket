import React from "react";
import { useSelector } from "react-redux";
import validate from "../../validators/resend-code";

import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import SuccessMessage from "../success-message/success-message.component";
import ErrorMessage from "../error-message/error-message.component";

import "./resend-code.styles.scss";

const ResendCode = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "" },
    validate
  );

  return (
    <div className="resend">
      <h2>Resend confirm code</h2>
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
        {errorMessage.resendCode && (
          <ErrorMessage>{errorMessage.resendCode}</ErrorMessage>
        )}
        {successMessage?.resendCode && (
          <SuccessMessage>{successMessage.resendCode}</SuccessMessage>
        )}
      </form>
    </div>
  );
};

export default ResendCode;
