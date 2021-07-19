import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cart: [],
  addToCartMessage: {},
  errorMessage: {},
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TICKET_TO_CART:
      if (state.cart.find((ticket) => ticket.id === action.payload.id)) {
        return {
          ...state,
          errorMessage: {
            ...state.errorMessage,
            [action.payload.id]: "You already added this ticket to your cart!",
          },
          addToCartMessage: {
            ...state.addToCartMessage,
            [action.payload.id]: "",
          },
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          addToCartMessage: {
            [action.payload.id]: "Ticket successfully added to your cart",
          },
        };
      }
    case CartActionTypes.REMOVE_TICKET_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
