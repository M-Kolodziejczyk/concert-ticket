import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import ErrorMessage from "../error-message/error-message.component";

const SendInvitation = (props) => {
  const dispatch = useDispatch();

  const {
    callback,
    validate,
    senderTableElementID,
    senderTableElementName,
    senderTable,
    authorEmail,
    currentInvitations,
  } = props;

  const initialState = {
    email: "",
    message: "",
    status: "new",
    senderTableElementID,
    senderTableElementName,
    senderTable,
    authorEmail,
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const invitations = [...JSON.parse(currentInvitations)];

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && !formError) {
      invitations.push({ email: values.email, status: "new" });
      dispatch(callback(values, JSON.stringify(invitations)));
      setValues(initialState);
    }

    //eslint-disable-next-line
  }, [errors, isSubmitting, formError, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setFormError(validateForm(currentInvitations, values));

    setIsSubmitting(true);
  };

  const validateForm = (currentInvitations, values) => {
    let errors = "";
    if (JSON.parse(currentInvitations.length) > 0) {
      JSON.parse(currentInvitations).forEach((invitation) => {
        if (values.email === invitation.email) {
          errors = `You already sent an invitation to ${values.email}`;
        }
      });
    }

    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="text"
          label="Email"
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <FormInput
          name="message"
          type="text"
          label="Message"
          handleChange={handleChange}
          value={values.message}
          error={errors.message}
        />
        <CustomButton type="submit" name="submit">
          Send
        </CustomButton>
        {formError && <ErrorMessage>{formError}</ErrorMessage>}
      </form>
    </div>
  );
};

export default SendInvitation;
