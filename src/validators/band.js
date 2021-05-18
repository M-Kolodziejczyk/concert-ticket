const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.genre) {
    errors.genre = "Genre is required";
  }

  return errors;
};

export default validate;