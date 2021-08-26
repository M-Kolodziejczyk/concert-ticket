import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

import {
  createConcertTicketStart,
  deleteConcertTicketStart,
} from "../../../redux/concert/concert.actions";
import validate from "../../../validators/ticket";
import useForm from "../../../hooks/useForm";

import CustomButton from "../../../components/custom-button/custom-button.component";
import FormInput from "../../../components/form-input/form-input.component";
import DeleteModal from "../../../components/delete-modal/delete-modal.component";

import "./user-concert-ticket.styles.scss";

const UserConcertTicket = ({ concertId }) => {
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);
  const userConcert = useSelector(
    (state) => state.concert.userConcerts[concertId]
  );
  const tickets = useSelector(
    (state) => state.concert.userConcerts[concertId].tickets
  );

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
      createConcertTicketStart
    );

  return (
    <div className="user-concert-ticket">
      <div className="ticket-form">
        <span className="ticket-form-header">Create ticket</span>
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
            value={values.price || ""}
            error={errors.price}
          />
          <div className="start-date">
            <label htmlFor="startDate">Select the day of startnig sale</label>
            <DatePicker
              selected={values.startDate}
              onChange={(e) => handleChangeDate(e, "startDate")}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy hh:mm aa"
              color="red"
            />
          </div>
          <div className="end-date">
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
          </div>
          <FormInput
            name="quantity"
            type="number"
            label="Quantity"
            handleChange={handleChange}
            value={values.quantity || ""}
            error={errors.quantity}
          />
          <div className="form__button">
            <CustomButton type="submit" name="submit">
              Create
            </CustomButton>
          </div>
          <div className="messages">
            {successMessage.createTicket && (
              <span className="success">{successMessage.createTicket}</span>
            )}
            {errorMessage.createTicket && (
              <span className="error">{errorMessage.createTicket}</span>
            )}
          </div>
        </form>
      </div>
      <div className="tickets-container">
        <h4>Tickets:</h4>
        {tickets.items.length > 0 &&
          tickets.items.map((ticket) => (
            <div key={ticket.id} className="ticket">
              <div className="ticket-header">
                <p>
                  <strong>Name: </strong>
                  {ticket.eventName}
                </p>
                <p>
                  <strong>Type: </strong>
                  {ticket.type}
                </p>
                <p>
                  <strong>Price: </strong>
                  {ticket.price.toFixed(2)}$
                </p>
                <p>
                  <strong>Quantity: </strong>
                  {ticket.quantity}
                </p>
              </div>
              <div className="date-container">
                <p className="date">
                  <strong>Date: </strong>
                  {format(new Date(ticket.date), "dd MMM yyy HH:mm")}
                </p>
                <p className="start">
                  <strong>Start sale: </strong>
                  {format(new Date(ticket.startDate), "dd MMM yyy HH:mm")}
                </p>
                <p className="end">
                  <strong>End sale: </strong>
                  {format(new Date(ticket.endDate), "dd MMM yyy HH:mm")}
                </p>
              </div>
              <p className="description">
                <strong>Description: </strong>
                {ticket.description}
              </p>
              <div className="delete-container">
                <DeleteModal
                  title={`Are you sure you want to delete ${ticket.eventName}`}
                  deleteBtn="Delete Ticket"
                  deleteConfirm="Delete"
                  id={ticket.id}
                  callback={deleteConcertTicketStart}
                  successMessage={successMessage.deleteTicket}
                  errorMessage={errorMessage.deleteTicket}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserConcertTicket;
