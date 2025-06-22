export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number | string;
  reviews: number;
  stock: number;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  count: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Order {
  id: number;
  date: string;
  time: string;
  items: CartItem[];
  subtotal: number;
  codCharge: number;
  total: number;
  customer: OrderFormData;
  paymentMethod: string;
  status: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export interface AppState {
  products: Product[];
  categories: Category[];
  cart: CartItem[];
  currentUser: User | null;
  orders: Order[];
  currentProduct: Product | null;
  selectedPaymentMethod: string;
  orderFormData: Partial<OrderFormData>;
  notifications: Notification[];
}

export type AppAction =
  | { type: 'INITIALIZE_DATA'; payload: { products: Product[]; categories: Category[] } }
  | { type: 'ADD_TO_CART'; payload: { productId: number; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CURRENT_USER'; payload: User | null }
  | { type: 'SET_CURRENT_PRODUCT'; payload: Product | null }
  | { type: 'SET_PAYMENT_METHOD'; payload: string }
  | { type: 'SET_ORDER_FORM_DATA'; payload: Partial<OrderFormData> }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: number; status: string } }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };