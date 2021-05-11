import React from "react";
import { createArtistStart } from "../../../../redux/artist/artist.actions";
import { useSelector } from "react-redux";
import validate from "../../../../validators/artist";

import useForm from "../../../../hooks/useForm.js";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";
import SuccessMessage from "../../../../components/success-message/success-message.component";
import ErrorMessage from "../../../../components/error-message/error-message.component";

import "./artist.styles.scss";

const Artist = () => {
  const errorMessage = useSelector((state) => state.artist.errorMessage);
  const successMessage = useSelector((state) => state.artist.successMessage);

  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      name: "",
      genre: "",
      role: "",
    },
    validate,
    createArtistStart
  );

  return (
    <div className="artist-tab">
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          label="Name"
          handleChange={handleChange}
          value={values.name}
          error={errors.name}
        />
        <FormInput
          name="genre"
          type="text"
          label="Genre"
          handleChange={handleChange}
          value={values.genre}
          error={errors.genre}
        />
        <FormInput
          name="role"
          type="text"
          label="Role"
          handleChange={handleChange}
          value={values.role}
          error={errors.role}
        />
        <div className="form__button">
          <CustomButton type="submit" name="submit">
            Create
          </CustomButton>
        </div>
        {errorMessage.createArtist && (
          <ErrorMessage>{errorMessage.createArtist}</ErrorMessage>
        )}
        {successMessage?.createArtist && (
          <SuccessMessage>{successMessage.createArtist}</SuccessMessage>
        )}
      </form>
    </div>
  );
};

export default Artist;
