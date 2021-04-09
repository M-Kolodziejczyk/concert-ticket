const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.newPassword) {
    errors.newPassword = "Password is required";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Password must contain at least 8 characters";
  } else if (/^[a-z][A-z]$/.test(values.newPassword)) {
    errors.newPassword =
      "Password must contain at least one lowercase and one uppercase letter";
  }

  if (!values.code) {
    errors.code = "Code is required";
  } else if (values.code.length < 6) {
    errors.code = "Confirm code must contain at least 6 characters";
  }

  return errors;
};

export default validate;
