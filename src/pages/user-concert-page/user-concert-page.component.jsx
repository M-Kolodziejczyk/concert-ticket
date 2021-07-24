import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";

import {
  getConcertImageStart,
  getUserConcertStart,
  uploadConcertImageStart,
  removeConcertStart,
} from "../../redux/concert/concert.actions";

import useFileForm from "../../hooks/useFileForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";
import CustomInputButton from "../../components/custom-input-button/custom-input-button.component";

import UserConcertTicket from "./components/user-concert-ticket.component";
import UserConcertEdit from "./components/user-concert-edit.component";
import UserConcertInvitation from "./components/user-concert-invitation.component";
import UserConcertArtistsBands from "./components/user-concert-artists-bands.component";
import UserConcertAddBand from "./components/user-concert-add-band.component";
import DeleteModal from "../../components/delete-modal/delete-modal.component";

import "./user-concert-page.styles.scss";

const UserConcertPage = ({ match }) => {
  const dispatch = useDispatch();
  const concertId = match.params.id;
  let history = useHistory();
  const userConcert = useSelector(
    (state) => state.concert.userConcerts[concertId]
  );
  const loading = useSelector((state) => state.concert.loading);
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);
  const userLoading = useSelector((state) => state.user.getUserLoading);
  const concertImageUrl = useSelector(
    (state) => state.concert.concertsImage[concertId]
  );

  const date = new Date(userConcert?.date);
  console.log("Date: ", date);

  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(concertId, ["image/jpeg"], uploadConcertImageStart);

  useEffect(() => {
    if (!concertImageUrl && userConcert?.keyImage) {
      dispatch(getConcertImageStart(concertId));
    }
  }, [dispatch, concertId, userConcert, concertImageUrl]);

  useEffect(() => {
    if (!userConcert) {
      dispatch(getUserConcertStart(concertId));
    }
  }, [concertId, dispatch, userConcert]);

  useEffect(() => {
    if (userConcert?.isDeleted === true) {
      history.push("/user/concerts");
    }
  }, [userConcert, history]);

  return (
    <div className="user-concert-page">
      {(loading || userLoading || loadingForm) && <Spinner />}
      {userConcert && Object.keys(userConcert).length > 1 && (
        <div className="container">
          <div className="details-container">
            {concertImageUrl && (
              <div className="img-wrapper">
                <img src={concertImageUrl} alt="concert" />
              </div>
            )}
            <div className="details">
              <div className="details-header">
                <p className="name">
                  <strong>{userConcert.name}</strong>
                </p>
                <UserConcertEdit concertId={concertId} />
              </div>
              <div className="date">
                <p>
                  <strong> Date: </strong>
                  {format(date, "dd MMMM yyyy")}
                </p>
                <p>
                  <strong>Time: </strong>
                  {format(date, "hh:mm a")}
                </p>
              </div>
              <p className="venue">
                <strong>Venue: </strong>
                {userConcert.venue}
              </p>
              <p className="genres">
                <strong>Genres: </strong>
                {userConcert.genres}
              </p>
              <p className="description">{userConcert.description}</p>
            </div>
          </div>
          <div className="upload-image-container">
            <form className="upload-image" onSubmit={handleSubmitImage}>
              {imageUrl && (
                <div className="img-container">
                  <img src={imageUrl} alt="artist img" />
                </div>
              )}
              <div className="form-container">
                <div className="button_container">
                  <div className="select-image">
                    <CustomInputButton
                      onChange={handleChangeImage}
                      label="Select image"
                      name={concertId}
                      id={concertId}
                    />
                  </div>
                  <CustomButton type="submit" name="submit">
                    Upload Image
                  </CustomButton>
                </div>
                {imageErrors && (
                  <div className="imageErrors">{imageErrors}</div>
                )}
              </div>
            </form>
          </div>
          <UserConcertAddBand />
          <UserConcertArtistsBands concertId={concertId} />
          <UserConcertTicket concertId={concertId} />
          <UserConcertInvitation concertId={concertId} />
          <div className="delete-container">
            <DeleteModal
              title={`Are you sure you want to delete ${userConcert.name}`}
              deleteBtn="Delete Concert"
              deleteConfirm="Delete"
              id={concertId}
              callback={removeConcertStart}
              successMessage={successMessage.removeConcert}
              errorMessage={errorMessage.removeConcert}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserConcertPage;
