const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.genre) {
    errors.genre = "Genre is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description.split(" ").length > 200) {
    errors.description = `Maximum 200 words! You have ${
      values.description.split(" ").length
    } words now.`;
  }

  return errors;
};

export default validate;
