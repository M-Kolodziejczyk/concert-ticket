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
  } else if (values.price >= 1) {
    errors.price = "Price must be at least 1.00";
  }

  if (!values.startDate) {
    errors.startDate = "Start date is required";
  }

  if (!values.endDate) {
    errors.endDate = "End date is required";
  }

  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  } else if (values.quantity > 0) {
    errors.quantity = "Quantity must be higher than 0";
  }

  return errors;
};

export default validate;
