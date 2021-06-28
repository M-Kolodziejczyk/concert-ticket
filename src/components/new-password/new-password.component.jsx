import React from "react";
import { useSelector } from "react-redux";
import validate from "../../validators/new-password";
import { newPasswordStart } from "../../redux/user/user.actions";

import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import SuccessMessage from "../success-message/success-message.component";
import ErrorMessage from "../error-message/error-message.component";

import "./new-password.styles.scss";

const NewPassword = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const successMessage = useSelector((state) => state.user.successMessage);
  const { handleChange, handleSubmit, values, errors } = useForm(
    { email: "", code: "", newPassword: "" },
    validate,
    newPasswordStart
  );
  return (
    <div className="new-password">
      <h2>New Password</h2>
      <div className="new-password-container">
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
          <FormInput
            name="newPassword"
            type="password"
            label="New password"
            handleChange={handleChange}
            value={values.newPassword}
            error={errors.newPassword}
          />
          <div className="form__buttons">
            <CustomButton type="submit" name="submit">
              Change password
            </CustomButton>
          </div>
          <div className="form-messages">
            {errorMessage?.newPassword && (
              <ErrorMessage>{errorMessage.newPassword}</ErrorMessage>
            )}
            {successMessage?.newPassword && (
              <SuccessMessage>{successMessage.newPassword}</SuccessMessage>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
