import CartActionTypes from "./cart.types";

export const addTicketToCart = (ticket) => ({
  type: CartActionTypes.ADD_TICKET_TO_CART,
  payload: ticket,
});
