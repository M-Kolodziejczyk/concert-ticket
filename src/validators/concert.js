const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required!";
  }

  if (!values.date) {
    errors.date = "Date is required!";
  }

  if (!values.venure) {
    errors.venue = "Venue is required!";
  }

  if (!values.genres) {
    errors.genres = "Name is required";
  }

  return errors;
};

export default validate;
