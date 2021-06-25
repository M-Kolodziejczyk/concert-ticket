const validate = (values) => {
  const errors = {};

  if (!values.oldPassword) {
    errors.oldPassword = "Old password is required";
  } else if (values.oldPassword.length < 8) {
    errors.oldPassword = "Old password must contain at least 8 characters";
  } else if (/^[a-z][A-z]$/.test(values.oldPassword)) {
    errors.oldPassword =
      "Old password must contain at least one lowercase and one uppercase letter";
  }

  if (!values.newPassword) {
    errors.newPassword = "New password is required";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "New password must contain at least 8 characters";
  } else if (/^[a-z][A-z]$/.test(values.newPassword)) {
    errors.newPassword =
      "New password must contain at least one lowercase and one uppercase letter";
  }

  return errors;
};

export default validate;
