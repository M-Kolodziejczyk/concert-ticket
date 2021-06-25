import React from "react";
import { useSelector } from "react-redux";
import { changePasswordStart } from "../../redux/user/user.actions";
import validate from "../../validators/changePassword";

import useForm from "../../hooks/useForm";

import Spinner from "../../components/spinner/spinner.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./user-details-page.styles.scss";

const UserDetailsPage = () => {
  const formLoading = useSelector((state) => state.user.formLoading);
  const successMessage = useSelector((state) => state.user.successMessage);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userEmail = useSelector((state) => state.user.user.email);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { oldPassword: "", newPassword: "" },
    validate,
    changePasswordStart
  );

  return (
    <div className="user-details-page">
      {formLoading && <Spinner />}
      <h1>User details</h1>
      <div className="details">
        <span className="email">Email: {userEmail}</span>
      </div>

      <div className="form-container">
        <h4>Change Password</h4>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="oldPassword"
            type="password"
            label="Old Password"
            handleChange={handleChange}
            value={values.oldPassword}
            error={errors.oldPassword}
          />
          <FormInput
            name="newPassword"
            type="password"
            label="New Password"
            handleChange={handleChange}
            value={values.newPassword}
            error={errors.newPassword}
          />
          <div className="form__button">
            <CustomButton type="submit" name="submit">
              Change
            </CustomButton>
          </div>
          <div className="messages">
            {successMessage.changePassword && (
              <span className="success">{successMessage.changePassword}</span>
            )}
            {errorMessage.changePassword && (
              <span className="error">{errorMessage.changePassword}</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;
