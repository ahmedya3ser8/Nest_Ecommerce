import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { wishlistType } from '../../types/app'
import { toast } from 'react-toastify';

interface wishlistState {
  wishlistItems: wishlistType[]
}

const initialState: wishlistState = {
  wishlistItems: localStorage.getItem('wishlist-products') ? JSON.parse(localStorage.getItem('wishlist-products')!) : []
}

const wishlistReducer = createSlice({
  initialState,
  name: 'wishlist',
  reducers: {
    addToWishlist: (state, action: PayloadAction<wishlistType>) => {
      const wishlistProduct = state.wishlistItems.find(product => product.id === action.payload.id);
      if(!wishlistProduct) {
        state.wishlistItems.push(action.payload);
        toast.success(`${action.payload.title} added to wishlist`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        state.wishlistItems = state.wishlistItems.filter(product => product.id !== action.payload.id);
        toast.warning('Item removed from wishlist', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('wishlist-products', JSON.stringify(state.wishlistItems));
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.setItem('wishlist-products', JSON.stringify(state.wishlistItems));
      toast.warning('all items removed', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
});

export const {addToWishlist, clearWishlist} = wishlistReducer.actions;
export default wishlistReducer.reducer;