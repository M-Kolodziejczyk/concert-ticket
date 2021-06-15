import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  order: {},
  orders: [],
  isCreateOrderSuccess: false,
  successMessage: {},
  createOrderResponse: {},
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
        createOrderResponse: action.payload,
        isCreateOrderSuccess: true,
        successMessage: {
          createOrder: "Create order success",
        },
        errorMessage: {},
        loading: false,
      };
    case OrderActionTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        createOrderResponse: {},
        isCreateOrderSuccess: false,
        successMessage: {},
        errorMessage: {
          createOrder: "Create order failure",
        },
        loading: false,
      };
    case OrderActionTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        successMessage: {
          getOrder: "GET order Success",
        },
        errorMessage: {},
      };
    case OrderActionTypes.GET_ORDER_FAILURE:
      return {
        ...state,
        order: {},
        successMessage: {},
        errorMessage: {
          getOrder: "GET order failure",
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
