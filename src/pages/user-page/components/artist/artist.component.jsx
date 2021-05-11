import React, { useState } from "react";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";
// import SuccessMessage from "../../../../components/success-message/success-message.component";
// import ErrorMessage from "../../../../components/error-message/error-message.component";

import "./artist.styles.scss";

const Artist = () => {
  const [values] = useState({ name: "", genre: "", role: "" });
  const [errors] = useState({ name: "", genre: "", role: "" });
  return (
    <div className="artist-tab">
      <form className="form">
        <FormInput
          name="name"
          type="text"
          label="Name"
          value={values.name}
          error={errors.name}
        />
        <FormInput
          name="genre"
          type="text"
          label="Genre"
          value={values.genre}
          error={errors.genre}
        />
        <FormInput
          name="role"
          type="text"
          label="Role"
          value={values.role}
          error={errors.role}
        />
        <div className="form__button">
          <CustomButton type="submit" name="submit">
            Create
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Artist;
