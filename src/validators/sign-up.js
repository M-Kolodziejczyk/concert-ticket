const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must contain at least 8 characters";
  } else if (/^[a-z][A-z]$/.test(values.password)) {
    errors.password =
      "Password must contain at least one lowercase and one uppercase letter";
  }

  if (!values.password2) {
    errors.password2 = "Confirm password";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match!";
  }

  return errors;
};

export default validate;
