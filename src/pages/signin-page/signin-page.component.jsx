import React from "react";
import { useSelector } from "react-redux";
import useHandleChange from "../../hooks/useForm";
import validate from "../../validators/SigninFormValidationRules";
import { emailSignInStart } from "../../redux/user/user.actions";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./signin-page.styles.scss";

const SigninPage = () => {
  const { handleChange, handleSubmit, values, errors } = useHandleChange(
    { email: "", password: "" },
    validate,
    emailSignInStart
  );

  const errorMessage = useSelector((state) => state.user.error);

  return (
    <div className="signinPage">
      <h1>SIgn</h1>
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
            label="password"
            handleChange={handleChange}
            value={values.password}
            error={errors.password}
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

export default SigninPage;
