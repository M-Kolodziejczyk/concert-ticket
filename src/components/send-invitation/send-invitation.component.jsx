import React from "react";
import useForm from "../../hooks/useForm";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const SendInviation = ({
  callback,
  validate,
  invitationID,
  invitationTable,
  authorEmail,
}) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      message: "",
      status: "new",
      invitationID,
      invitationTable,
      authorEmail,
    },
    validate,
    callback
  );

  return (
    <div>
      <h6>Send Invitation</h6>
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
      </form>
    </div>
  );
};

export default SendInviation;
