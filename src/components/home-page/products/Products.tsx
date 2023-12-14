import { TbPercentage } from "react-icons/tb";
import { FaStar, FaTag } from "react-icons/fa6";
import ProductItem from "./ProductItem";
import ProductInfo from "./ProductInfo";

function Products() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col xl:flex-row ">
          <div className="left w-full xl:w-1/4 bg-gradient-to-b from-[#f8c144] to-[#3cb47c] p-5 rounded-[10px_0px_0px_10px]">
            <ProductInfo />
          </div>
          <div className="right w-full xl:w-3/4 bg-[#eee] p-5 rounded-[0px_10px_10px_0px]">
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="p-2 text-[14px] lg:text-[17px] font-bold flex items-center gap-1">
                <FaTag />
                TOP ORDER
              </div>
              <div className="p-2 text-[14px] lg:text-[17px] font-bold flex items-center gap-1">
                <TbPercentage />
                TOP DISCOUNT
              </div>
              <div className="p-2 text-[14px] lg:text-[17px] font-bold flex items-center gap-1">
                <FaStar />
                TOP RATING
              </div>
            </div>
            <ProductItem />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;