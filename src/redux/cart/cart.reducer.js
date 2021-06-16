import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TICKET_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CartActionTypes.REMOVE_TICKET_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
