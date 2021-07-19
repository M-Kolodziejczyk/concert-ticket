import CartActionTypes from "./cart.types";

export const addTicketToCart = (ticket) => {
  return {
    type: CartActionTypes.ADD_TICKET_TO_CART,
    payload: ticket,
  };
};

export const removeTicket = (id) => ({
  type: CartActionTypes.REMOVE_TICKET_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
