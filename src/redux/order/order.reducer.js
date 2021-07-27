import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  listUserOrders: [],
  userOrders: {},
  savedOrders: {},
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
    case OrderActionTypes.GET_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case OrderActionTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        userOrders: {
          ...state.userOrders,
          [action.payload.id]: action.payload,
        },
        errorMessage: {},
      };
    case OrderActionTypes.GET_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        userOrders: null,
        successMessage: {},
        errorMessage: {
          getOrder: "GET order failure",
        },
      };
    case OrderActionTypes.CLEAR_ORDER:
      return {
        ...state,
        order: {},
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
    case OrderActionTypes.CLEAR_ORDER_RESPONSE:
      return {
        ...state,
        createOrderResponse: {},
      };
    case OrderActionTypes.LIST_USER_ORDERS_BY_DATE_START:
      return {
        ...state,
        loading: true,
      };
    case OrderActionTypes.LIST_USER_ORDERS_BY_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        listUserOrders: action.payload,
      };
    case OrderActionTypes.LIST_USER_ORDERS_BY_DATE_FAILURE:
      return {
        ...state,
        loading: false,
        listUserOrders: null,
      };
    case OrderActionTypes.CLEAR_USER:
      return {
        ...state,
        listUserOrders: [],
        userOrders: {},
        savedOrders: {},
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
    default:
      return state;
  }
};

export default orderReducer;
