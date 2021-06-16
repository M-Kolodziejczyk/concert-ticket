import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  order: {},
  orders: [],
  isCreateOrderSuccess: false,
  successMessage: {},
  createOrderResponse: {},
  errorMessage: {},
  processPayment: {
    status: "",
  },
  processPaymentLoading: false,
  processPaymentStatus: "",
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
    case OrderActionTypes.PROCESS_PAYMENT_START:
      return {
        ...state,
        processPaymentLoading: true,
      };
    case OrderActionTypes.PROCESS_PAYMENT_SUCCESS:
      return {
        ...state,
        processPaymentLoading: false,
        processPaymentStatus: action.payload.status,
        processPayment: {
          status: action.payload.status,
        },
        successMessage: {
          processPayment: "Process payment Success",
        },
        errorMessage: {},
      };
    case OrderActionTypes.PROCESS_PAYMENT_FAILURE:
      return {
        ...state,
        processPaymentLoading: false,
        processPaymentStatus: "failed",
        processPayment: {
          status: "FAILED",
        },
        successMessage: {},
        errorMessage: {
          processPayment: "Process payment failure",
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
