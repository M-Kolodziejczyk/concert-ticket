import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  createArtistStart,
  getUserArtistStart,
  updateArtistStart,
  uploadArtistImageStart,
  getUserArtistImageStart,
  deleteUserArtistStart,
} from "../../redux/artist/artist.actions";
import validate from "../../validators/artist";

import useForm from "../../hooks/useForm.js";
import useFileForm from "../../hooks/useFileForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInputButton from "../../components/custom-input-button/custom-input-button.component";
import FormInput from "../../components/form-input/form-input.component";
import FormTextarea from "../../components/form-textarea/form-textarea.component";
import ErrorMessage from "../../components/error-message/error-message.component";
import Spinner from "../../components/spinner/spinner.component";
import DeleteModal from "../../components/delete-modal/delete-modal.component";

import "./user-artist.styles.scss";

const UserArtistPage = () => {
  const dispatch = useDispatch();
  const [isCreateMode, setIsCreateMode] = useState(true);
  const artistLoading = useSelector((state) => state.artist.loading);
  const userArtist = useSelector((state) => state.artist.userArtist);
  const artistID = useSelector((state) => state.user.user.artistID);
  const formLoading = useSelector((state) => state.artist.formLoading);
  const successMessage = useSelector((state) => state.artist.successMessage);
  const errorMessage = useSelector((state) => state.artist.errorMessage);
  const artistImageUrl = useSelector(
    (state) => state.artist.userArtistImageUrl
  );

  const { handleChange, handleSubmit, values, errors } = useForm(
    isCreateMode
      ? {
          name: "",
          genre: "",
          role: "",
          description: "",
        }
      : {
          id: artistID,
          name: "",
          genre: "",
          role: "",
          description: "",
        },
    validate,
    isCreateMode ? createArtistStart : updateArtistStart
  );

  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(userArtist?.id, ["image/jpeg"], uploadArtistImageStart);

  useEffect(() => {
    if (userArtist?.identityId && !artistImageUrl) {
      dispatch(getUserArtistImageStart(userArtist.identityId));
    }

    if (userArtist && Object.keys(userArtist).length > 0) {
      setIsCreateMode(false);
    } else {
      setIsCreateMode(true);
    }
  }, [userArtist, dispatch, artistImageUrl]);

  useEffect(() => {
    if (
      userArtist !== null &&
      Object.keys(userArtist).length === 0 &&
      artistID
    ) {
      dispatch(getUserArtistStart(artistID));
    }
  }, [dispatch, userArtist, artistID]);

  return (
    <div className="user-artist-page">
      {(artistLoading || formLoading) && <Spinner />}
      {userArtist && Object.keys(userArtist).length > 0 && (
        <div className="artist-details-container">
          <div className="image">
            {artistImageUrl && <img src={artistImageUrl} alt="artist img" />}
          </div>
          <div className="details">
            <div className="group name">
              <p>
                <strong>{userArtist.name}</strong>
              </p>
              <DeleteModal
                title={`Are you sure you want to delete ${userArtist.name}`}
                deleteConfirm="Delete"
                id={userArtist.id}
                callback={deleteUserArtistStart}
                successMessage={successMessage.deleteArtist}
                errorMessage={errorMessage.deleteArtist}
              />
            </div>
            <div className="group">
              <p className="name">Genre:</p>
              <p>{userArtist.genre}</p>
            </div>
            <div className="group">
              <p className="name">Role:</p>
              <p>{userArtist.role}</p>
            </div>
            <div className="group">
              <p className="description">{userArtist.description}</p>
            </div>
          </div>
        </div>
      )}
      <div className="forms-container">
        {userArtist && Object.keys(userArtist).length > 0 && (
          <div className="form-image">
            {imageUrl && <img src={imageUrl} alt="artist img" />}
            <form onSubmit={handleSubmitImage}>
              <div className="btn-container">
                <CustomInputButton
                  handleChange={handleChangeImage}
                  label="Select image"
                  name="artistImg"
                  id="artistImg"
                />
                <div className="form__button">
                  <CustomButton type="submit" name="submit">
                    Upload Image
                  </CustomButton>
                </div>
              </div>
              {imageErrors && <div className="imageErrors">{imageErrors}</div>}
            </form>
          </div>
        )}
        <div className="form-details">
          <form onSubmit={handleSubmit}>
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
            <FormTextarea
              name="description"
              type="text"
              label="Description"
              handleChange={handleChange}
              value={values.description}
              error={errors.description}
            />

            <div className="form__button">
              <CustomButton type="submit" name="submit">
                {isCreateMode ? "Create" : "Update"}
              </CustomButton>
            </div>
            {errorMessage.createArtist && (
              <ErrorMessage>{errorMessage.createArtist}</ErrorMessage>
            )}
          </form>
        </div>
      </div>
      {userArtist?.bands?.items.length > 0 && (
        <div className="band-container">
          <h3>Bands: </h3>
          {userArtist?.bands?.items.map((item) => (
            <Link
              to={`/bands/${item.band.id}`}
              className="band-link"
              key={item.band.id}
            >
              <p>
                <strong>Name: </strong>
                {item.band.name}
              </p>
              <p>
                <strong>Genre: </strong> {item.band.genre}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserArtistPage;
