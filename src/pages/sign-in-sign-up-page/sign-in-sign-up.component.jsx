import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-sign-up.styles.scss";

const SignInSignUpPage = () => {
  const userFormLoading = useSelector((state) => state.user.formLoading);

  return (
    <div className="signIn-signUp-page">
      {userFormLoading && <Spinner />}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
