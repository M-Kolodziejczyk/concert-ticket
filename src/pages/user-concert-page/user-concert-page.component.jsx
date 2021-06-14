import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import {
  createTicketStart,
  getTicketsByConcertIdStart,
} from "../../redux/ticket/ticket.actions";
import { getConcertImageStart } from "../../redux/concert/concert.actions";

import validate from "../../validators/ticket";
import useForm from "../../hooks/useForm";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./user-concert-page.styles.scss";

const UserConcertPage = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const concert = useSelector((state) => state.user.userConcerts[id]);
  const concertImage = useSelector((state) => state.concert.concertsImage[id]);
  const tickets = useSelector((state) => state.ticket.concertTickets[id]);
  const date = new Date(concert?.date);

  const { handleChange, handleSubmit, values, errors, handleChangeDate } =
    useForm(
      {
        eventName: concert?.name,
        description: "",
        type: "",
        price: 0,
        startDate: new Date(),
        endDate: new Date(),
        date: concert?.date,
        venue: concert?.venue,
        quantity: 0,
        concertID: id,
      },
      validate,
      createTicketStart
    );

  useEffect(() => {
    if (!concertImage && concert?.keyImage) {
      dispatch(getConcertImageStart(id));
    }
  }, [dispatch, id, concert, concertImage]);

  useEffect(() => {
    if (!tickets) {
      dispatch(getTicketsByConcertIdStart(id));
    }
  }, [id, dispatch, tickets]);

  return (
    <div className="user-concert-page">
      {concert && (
        <div className="details">
          <div className="img-wrapper">
            {concertImage && <img src={concertImage} alt="concert" />}
          </div>
          <p>Name: {concert.name}</p>
          <p>Date: {format(date, "MMMM dd yyyy")}</p>
          <p>Time: {format(date, "hh:mm a")}</p>
          <p>Venue: {concert.venue}</p>
          <p> Genres: {concert.genres}</p>
        </div>
      )}
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
  );
};

export default UserConcertPage;
