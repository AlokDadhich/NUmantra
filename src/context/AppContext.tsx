import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { initializeData } from '../data/initialData';
import type { AppState, AppAction, Product, CartItem, User, Order } from '../types';

const initialState: AppState = {
  products: [],
  categories: [],
  cart: [],
  currentUser: null,
  orders: [],
  currentProduct: null,
  selectedPaymentMethod: 'card',
  orderFormData: {},
  notifications: []
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories
      };

    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        const product = state.products.find(p => p.id === action.payload.productId);
        if (product) {
          const newItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: action.payload.quantity
          };
          return {
            ...state,
            cart: [...state.cart, newItem]
          };
        }
      }
      return state;

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };

    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };

    case 'SET_CURRENT_PRODUCT':
      return {
        ...state,
        currentProduct: action.payload
      };

    case 'SET_PAYMENT_METHOD':
      return {
        ...state,
        selectedPaymentMethod: action.payload
      };

    case 'SET_ORDER_FORM_DATA':
      return {
        ...state,
        orderFormData: action.payload
      };

    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        )
      };

    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };

    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const data = initializeData();
    dispatch({ type: 'INITIALIZE_DATA', payload: data });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}