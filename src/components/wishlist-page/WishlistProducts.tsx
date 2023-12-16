import { addToWishlist, clearWishlist } from '../../rtk/slices/wishlistReducer';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../rtk/store';
import { Link } from 'react-router-dom';

function WishlistProducts() {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  
  return (
    <section className='py-12'>
      <div className="container">
        {wishlist.length > 0 ? (
          <>
            <div className="grid grid-cols-1">
              {wishlist.map(product => (
                <div className="flex justify-between items-center flex-col lg:flex-row mb-4 last:m-0" key={product.id}>
                  <img src={product.imgURL} alt="product-img" className='w-[120px]' />
                  <div className="text-center">
                    <h2 className='text-[18px] text-[#3cb47c] mb-2'>{product.title}</h2>
                    <p>{`$${product.price}`}</p>
                  </div>
                  <button className="p-2 bg-[#3cb47c] text-white rounded-[10px]" onClick={() => dispatch(addToWishlist(product))}>remove</button>
                </div>
              ))}
            </div>
            <button className='block p-2 bg-[#f00] text-white ml-auto rounded-[10px]' onClick={() => dispatch(clearWishlist())}>clear cart</button>
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

export default WishlistProducts;