import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  order: {},
  orders: [],
  successMessage: {},
  errorMessage: {},
  loading: false,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.CREATE_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case OrderActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        successMessage: {
          createOrder: "Create order success",
        },
        errorMessage: {},
        loading: false,
      };
    case OrderActionTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        order: {},
        successMessage: {},
        errorMessage: {
          createOrder: "Create order failure",
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
