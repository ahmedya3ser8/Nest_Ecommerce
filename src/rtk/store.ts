
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cartReducer';
import wishlistReducer from './slices/wishlistReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;