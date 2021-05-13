const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required!";
  }

  if (!values.genre) {
    errors.genre = "Genre is required!";
  }

  if (!values.role) {
    errors.role = "Role is required!";
  }

  return errors;
};

export default validate;