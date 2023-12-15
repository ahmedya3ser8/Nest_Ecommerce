
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { cartType } from '../../types/app';
import { toast } from 'react-toastify';

interface cartState {
  cartItems: cartType[]
}

const initialState: cartState = {
  cartItems: localStorage.getItem('cart-products') ? JSON.parse(localStorage.getItem('cart-products')!) : []
}

const cartReducer = createSlice({
  initialState,
  name: 'cartReducer',
  reducers: {
    addToCart: (state, action:PayloadAction<cartType>) => {
      const existProduct = state.cartItems.find(product => product.id === action.payload.id);
      if(existProduct) {
        existProduct.quantity += 1;
        toast.info('Increased product quantity', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        const productItem = {...action.payload, quantity: 1}
        state.cartItems.push(productItem);
        toast.success(`${action.payload.title} added to cart`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('cart-products', JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action: PayloadAction<cartType>) => {
      const existProduct = state.cartItems.find(product => product.id === action.payload.id);
      if(existProduct && existProduct.quantity !== 1) {
        existProduct.quantity -= 1
        toast.info('Decreased product quantity', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('cart-products', JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action: PayloadAction<cartType>) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload.id);
      localStorage.setItem('cart-products', JSON.stringify(state.cartItems));
      toast.warning('Item has been removed', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cart-products', JSON.stringify(state.cartItems));
      toast.warning('You have removed all items', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
});

export const {addToCart, decreaseQuantity, removeItemFromCart, clearCart} = cartReducer.actions;
export default cartReducer.reducer;