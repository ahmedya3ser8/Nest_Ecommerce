import { addToCart, clearCart, decreaseQuantity, removeItemFromCart } from '../../rtk/slices/cartReducer';
import {useSelector, useDispatch} from 'react-redux'; 
import { RootState } from '../../rtk/store';
import { Link } from 'react-router-dom';

function CartProducts() {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc: number, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <section className='py-12'>
      <div className="container">
        {cart.length > 0 ? (
          <>
            <div className="grid grid-cols-1">
              {cart.map(product => (
                <div className="flex justify-between items-center flex-col lg:flex-row mb-4 last:m-0" key={product.id}>
                  <img src={product.imgURL} alt="product-img" className='w-[120px]' />
                  <div className="text-center">
                    <h2 className='text-[18px] text-[#3cb47c] mb-2'>{product.title}</h2>
                    <p>{`$${product.price}`}</p>
                  </div>
                  <div className="btns flex gap-3 my-3">
                    <button onClick={() => dispatch(addToCart(product))} className='p-[5px_8px] bg-[#3cb47c] text-white rounded-[6px]'>+</button>
                    <button className='p-[5px_8px] text-white bg-[#3cb47c] rounded-[6px]'>{product.quantity}</button>
                    <button onClick={() => dispatch(decreaseQuantity(product))} className='p-[5px_8px] bg-[#3cb47c] text-white rounded-[6px]'>-</button>
                  </div>
                  <div className="total mb-2">{`$${product.price * product.quantity}`}</div>
                  <button className='p-2 bg-[#3cb47c] text-white rounded-[10px]' onClick={() => dispatch(removeItemFromCart(product))}>Remove</button>
                </div>
              ))}
            </div>
            <div className="py-3 flex justify-around items-center">
              <button className='p-2 bg-[#f00] text-white rounded-[10px]'>{`Total: $${totalPrice}`}</button>
              <button className='block p-2 bg-[#f00] text-white rounded-[10px]' onClick={() => dispatch(clearCart())}>clear cart</button>
            </div>
          </>
        ) : (
          <div className="h-[30vh] flex justify-center items-center">
            <p className='text-[18px]'>
              Cart is empty :
              <Link to={'/shop'} className='text-[#3cb47c] text-[20px] font-medium ml-2'>go to shopping</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartProducts;