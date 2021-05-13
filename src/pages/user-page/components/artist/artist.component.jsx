import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createArtistStart,
  uploadArtistImageStart,
  getArtistStart,
} from "../../../../redux/artist/artist.actions";
import validate from "../../../../validators/artist";

import useForm from "../../../../hooks/useForm.js";
import useFileForm from "../../../../hooks/useFileForm";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";
import SuccessMessage from "../../../../components/success-message/success-message.component";
import ErrorMessage from "../../../../components/error-message/error-message.component";

import "./artist.styles.scss";

const Artist = (id) => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch(getArtistStart());
  const errorMessage = useSelector((state) => state.artist.errorMessage);
  const successMessage = useSelector((state) => state.artist.successMessage);
  const artist = useSelector((state) => state.artist.userArtist);

  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      name: "",
      genre: "",
      role: "",
    },
    validate,
    createArtistStart
  );

  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(id.artistID, ["image/jpeg"], uploadArtistImageStart);

  useEffect(() => {
    if (Object.keys(artist).length < 1 && id.artistID) {
      console.log(id.artistID);
      dispatch(getArtistStart(id.artistID));
    }

    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="artist-tab">
      <form onSubmit={handleSubmitImage}>
        <input
          name="img"
          type="file"
          label="Select image"
          onChange={handleChangeImage}
        />
        {imageErrors && <div className="imageErrors">{imageErrors}</div>}
        {imageUrl && <img src={imageUrl} alt="artist img" />}
        <div className="form__button">
          <CustomButton type="submit" name="submit">
            Upload Image
          </CustomButton>
        </div>
      </form>
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
