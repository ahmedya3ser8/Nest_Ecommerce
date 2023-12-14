
function ProductInfo() {
  return (
    <>
      <div className="top text-white mb-5">
              <h1 className="text-[35px]">Daily Best Sells</h1>
              <p className="text-[14px] underline">Exclusive Offer - 20% Off</p>
              <div className="mb-3">
                <h2 className="text-[25px] mb-1">Specialist in the grocery store from $7.99</h2>
                <p className="text-[14px]">Only this week. Don’t miss...</p>
              </div>
              <button className="p-2 bg-white text-black font-medium rounded-[15px]">Hurry Up!</button>
      </div>
      <div className="bottom flex justify-center items-center">
        <img src="/images/home-products/banner-1.png" alt="banner" className="w-[250px]" />
      </div>
    </>
  )
}

export default ProductInfo;