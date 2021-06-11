const validate = (values) => {
  const errors = {};

  if (!values.type) {
    errors.type = "Ticket type is required";
  }
  if (!values.description) {
    errors.description = "description is required";
  }
  if (!values.price) {
    errors.price = "Price is required";
  }
  if (!values.startDate) {
    errors.startDate = "Start date is required";
  }
  if (!values.endDate) {
    errors.endDate = "End date is required";
  }

  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  }

  return errors;
};

export default validate;
