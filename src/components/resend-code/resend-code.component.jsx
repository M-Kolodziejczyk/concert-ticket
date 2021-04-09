import React from "react";
import { useSelector } from "react-redux";
import validate from "../../validators/resend-code";

import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import MessageSuccess from "../message-success/message-success.component";

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
          <span className="form-error-message">{errorMessage.resendCode}</span>
        )}
        {successMessage?.resendCode && (
          <MessageSuccess>{successMessage.resendCode}</MessageSuccess>
        )}
      </form>
    </div>
  );
};

export default ResendCode;
