const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required!";
  }

  if (!values.date) {
    errors.date = "Date is required!";
  }

  if (!values.venue) {
    errors.venue = "Venue is required!";
  }

  if (!values.genres) {
    errors.genres = "Genre is required";
  }

  return errors;
};

export default validate;
