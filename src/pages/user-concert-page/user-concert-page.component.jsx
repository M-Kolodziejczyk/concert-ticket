import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import {
  createTicketStart,
  getTicketsByConcertIdStart,
} from "../../redux/ticket/ticket.actions";
import {
  getConcertImageStart,
  getUserConcertStart,
  uploadConcertImageStart,
} from "../../redux/concert/concert.actions";

import validate from "../../validators/ticket";
import useForm from "../../hooks/useForm";
import useFileForm from "../../hooks/useFileForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import Spinner from "../../components/spinner/spinner.component";
import CustomInputButton from "../../components/custom-input-button/custom-input-button.component";

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
  const tickets = useSelector(
    (state) => state.ticket.concertTickets[concertId]
  );
  const date = new Date(userConcert?.date);

  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(concertId, ["image/jpeg"], uploadConcertImageStart);

  const { handleChange, handleSubmit, values, errors, handleChangeDate } =
    useForm(
      {
        eventName: userConcert?.name,
        description: "",
        type: "",
        price: 0,
        startDate: new Date(),
        endDate: new Date(),
        date: userConcert?.date,
        venue: userConcert?.venue,
        quantity: 0,
        concertID: concertId,
      },
      validate,
      createTicketStart
    );

  useEffect(() => {
    if (!concertImageUrl && userConcert?.keyImage) {
      dispatch(getConcertImageStart(concertId));
    }
  }, [dispatch, concertId, userConcert, concertImageUrl]);

  useEffect(() => {
    if (!tickets) {
      dispatch(getTicketsByConcertIdStart(concertId));
    }
  }, [concertId, dispatch, tickets]);

  useEffect(() => {
    if (!userConcert) {
      dispatch(getUserConcertStart(concertId));
    }
  }, [concertId, dispatch, userConcert]);
  console.log("user concert: ", loadingForm);

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

          <div className="ticket-form">
            <h3>Create ticket</h3>
            <form onSubmit={handleSubmit}>
              <FormInput
                name="description"
                type="text"
                label="Description"
                handleChange={handleChange}
                value={values.description}
                error={errors.description}
              />
              <FormInput
                name="type"
                type="text"
                label="Ticket type"
                handleChange={handleChange}
                value={values.type}
                error={errors.type}
              />
              <FormInput
                name="price"
                type="number"
                label="Price"
                handleChange={handleChange}
                value={values.price}
                error={errors.price}
              />
              <label htmlFor="startDate">Select the day of startnig sale</label>
              <DatePicker
                selected={values.startDate}
                onChange={(e) => handleChangeDate(e, "startDate")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy hh:mm aa"
              />
              <label htmlFor="startDate">Select the day of ending sale</label>
              <DatePicker
                selected={values.endDate}
                onChange={(e) => handleChangeDate(e, "endDate")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy hh:mm aa"
              />
              <FormInput
                name="quantity"
                type="number"
                label="Quantity"
                handleChange={handleChange}
                value={values.quantity}
                error={errors.quantity}
              />
              <div className="form__button">
                <CustomButton type="submit" name="submit">
                  Create
                </CustomButton>
              </div>
            </form>
          </div>
          <div className="tickets-container">
            <h4>Tickets:</h4>
            {tickets &&
              tickets.map((ticket) => (
                <div key={ticket.id} className="ticket">
                  <p>Name: {ticket.eventName}</p>
                  <p>Description: {ticket.description}</p>
                  <p>Type: {ticket.type}</p>
                  <p>Prrice: {ticket.price}</p>
                  <p>Quantity: {ticket.quantity}</p>
                  <p>Start Date: {ticket.startDate}</p>
                  <p>End Date: {ticket.endDate}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserConcertPage;
