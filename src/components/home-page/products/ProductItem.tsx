import { IoEyeSharp } from "react-icons/io5";
import { FaStar, FaHeart, FaShuffle, FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../rtk/slices/cartReducer";

function ProductItem() {
  const productsItems = [
    {id: 100, num: 255, imgURL: '/images/home-products/Almarai Full Cream Milk - 1L.webp', title: 'Almarai Full Cream Milk - 1L', price: 15},
    {id: 200, num: 300, imgURL: '/images/home-products/Al Watania Chicken Liver & Gizzard - 1K.webp', title: 'Al Watania Chicken Liver & Gizzard - 1K', price: 100},
    {id: 300, num: 780, imgURL: '/images/home-products/Abu Auf Protein Bar Cranberries + Coconut, 70 Gm.jpg', title: 'Abu Auf Protein Bar Cranberries + Coconut, 70 Gm', price: 60},
    {id: 400, num: 360, imgURL: '/images/home-products/Almarai Full Cream Milk - 1L.webp', title: 'Almarai Full Cream Milk - 1L', price: 15},
  ]
  const dispatch = useDispatch();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {productsItems.map(product => (
        <div className="bg-white p-5 flex flex-col justify-between rounded-[10px]" key={product.id}>
          <div className="top">
            <span className="block mb-2 bg-[#1494a9] text-white w-fit p-[5px_8px] rounded-[10px]">{product.num}</span>
            <div className="flex items-center justify-center flex-col gap-2">
              <img src={product.imgURL} alt="product-img" className="w-[140px] h-[140px]" />
              <div className="stars flex gap-1 mb-3 text-[#666]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <div className="bottom flex items-center justify-center flex-col">
            <div className="h-20">
              <p className="text-[15px] text-[#777] text-center">{product.title}</p>
            </div>
            <span className="block text-green-500 text-[25px] font-bold mb-1">{`$${product.price}`}</span>
            <button className="p-[10px] bg-green-500 text-white mb-3 rounded-[10px] flex items-center gap-2" onClick={() => dispatch(addToCart(product))}>
              <FaCartShopping />
              add to cart
            </button>
            <div className="btns flex gap-2">
              <div className="p-[10px] border-[1px] border-solid border-[#00000017] cursor-pointer transition-colors duration-300 hover:text-[#fdc040]" >
                <IoEyeSharp />
              </div>
              <div className="p-[10px] border-[1px] border-solid border-[#00000017] cursor-pointer transition-colors duration-300 hover:text-[#fdc040]" >
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
  )
}

export default ProductItem;