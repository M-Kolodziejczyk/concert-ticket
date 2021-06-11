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
    default:
      return state;
  }
};

export default cartReducer;