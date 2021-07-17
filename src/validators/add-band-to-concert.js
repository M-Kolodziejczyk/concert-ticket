const validate = (values) => {
  const errors = {};

  if (!values.concertId) {
    errors.concertId = "concertId is required!";
  }

  if (!values.bandId) {
    errors.bandId = "You must select band!";
  }

  return errors;
};

export default validate;
