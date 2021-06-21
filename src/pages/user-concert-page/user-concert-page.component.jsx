import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import {
  getConcertImageStart,
  getUserConcertStart,
  uploadConcertImageStart,
} from "../../redux/concert/concert.actions";

import useFileForm from "../../hooks/useFileForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";
import CustomInputButton from "../../components/custom-input-button/custom-input-button.component";

import UserConcertTicket from "./components/user-concert-ticket.component";
import UserConcertEdit from "./components/user-concert-edit.component";
import UserConcertInvitation from "./components/user-concert-invitation.component";

import "./user-concert-page.styles.scss";

const UserConcertPage = ({ match }) => {
  const dispatch = useDispatch();
  const concertId = match.params.id;
  const userConcert = useSelector(
    (state) => state.concert.userConcerts[concertId]
  );
  const loading = useSelector((state) => state.concert.loading);
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const userLoading = useSelector((state) => state.user.getUserLoading);
  const concertImageUrl = useSelector(
    (state) => state.concert.concertsImage[concertId]
  );

  const date = new Date(userConcert?.date);

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

  return (
    <div className="user-concert-page">
      {(loading || userLoading || loadingForm) && <Spinner />}
      {userConcert && (
        <div className="container">
          <div className="details-container">
            <div className="img-wrapper">
              {concertImageUrl && <img src={concertImageUrl} alt="concert" />}
            </div>
            <div className="details">
              <p>Name: {userConcert.name}</p>
              <p>Date: {format(date, "MMMM dd yyyy")}</p>
              <p>Time: {format(date, "hh:mm a")}</p>
              <p>Venue: {userConcert.venue}</p>
              <p> Genres: {userConcert.genres}</p>
              <UserConcertEdit concertId={concertId} />
            </div>
          </div>
          <div className="upload-image-container">
            <form className="upload-image" onSubmit={handleSubmitImage}>
              <div className="img-container">
                {imageUrl && <img src={imageUrl} alt="artist img" />}
              </div>
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
              {imageErrors && <div className="imageErrors">{imageErrors}</div>}
            </form>
          </div>
          <UserConcertTicket concertId={concertId} />
          <UserConcertInvitation concertId={concertId} />
        </div>
      )}
    </div>
  );
};

export default UserConcertPage;
