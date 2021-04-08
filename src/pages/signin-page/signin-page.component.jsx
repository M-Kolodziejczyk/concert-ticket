import React from "react";
import useHandleChange from "../../hooks/useForm";
import validate from "../../validators/SigninFormValidationRules";
import { emailSignInStart } from "../../redux/user/user.actions";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./signin-page.styles.scss";

const SigninPage = () => {
  const { handleChange, handleSubmit, values } = useHandleChange(
    { email: "", password: "" },
    validate,
    emailSignInStart
  );

  return (
    <div className="signinPage">
      <h1>SIgn</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Email:"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <CustomButton type="submit" name="submit">
              Signin
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
