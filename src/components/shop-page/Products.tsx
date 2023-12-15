import { IoEyeSharp } from "react-icons/io5";
import { FaStar, FaHeart, FaShuffle, FaCartShopping } from "react-icons/fa6";
import products from '../../data/products.json';
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cartReducer";
import { addToWishlist } from "../../rtk/slices/wishlistReducer";

function Products() {
  const dispatch = useDispatch();
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map(product => (
            <div className="box p-5 flex flex-col justify-between border-[1px] border-solid border-[#00000017] rounded-[10px]" key={product.id}>
              <div className="head">
                <div className="flex items-center justify-center flex-col gap-2">
                  <img src={product.imgURL} alt="product-img" className="w-[140px] h-[140px]" />
                  <div className="stars flex gap-1 mb-3 text-[#00000017]">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </div>
              <div className="body flex items-center justify-center flex-col">
                <div className="h-20">
                  <p className="text-[15px] text-[#777] text-center">{product.title}</p>
                </div>
                <span className="block text-green-500 text-[25px] font-bold mb-1">{`$${product.price}`}</span>
                <button className="p-[10px] bg-green-500 text-white mb-3 rounded-[10px] flex items-center gap-2" onClick={() => dispatch(addToCart(product))}>
                  <FaCartShopping />
                  add to cart
                </button>
                <div className="btns flex gap-2">
                  <div className="p-[10px] border-[1px] border-solid border-[#00000017] cursor-pointer transition-colors duration-300 hover:text-[#fdc040]">
                    <IoEyeSharp />
                  </div>
                  <div className="p-[10px] border-[1px] border-solid border-[#00000017] cursor-pointer transition-colors duration-300 hover:text-[#fdc040]" onClick={() => dispatch(addToWishlist(product))}>
                    <FaHeart />
                  </div>
                  <div className="p-[10px] border-[1px] border-solid border-[#00000017] cursor-pointer transition-colors duration-300 hover:text-[#fdc040]">
                    <FaShuffle />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;