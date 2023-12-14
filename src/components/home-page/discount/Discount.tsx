
function Discount() {
  return (
    <section className="pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="box p-5 bg-[#eaeefe] h-[200px] flex flex-col justify-between items-center text-center rounded-[10px]">
            <h3 className="text-[#3cb47c]">14% Discount</h3>
            <p className="text-[18px] font-medium">Don&apos;t miss the discounts in these Fruits & Vegetables</p>
            <button className="bg-[#3cb47c] text-white p-2 rounded-[10px]">Check Discount!</button>
          </div>
          <div className="box p-5 bg-[#fef4d5] h-[200px] flex flex-col justify-between items-center text-center rounded-[10px]">
            <h4 className="text-[#3cb47c]">14% Discount</h4>
            <p className="text-[18px] font-medium">Organic brands items are currently available</p>
            <button className="bg-[#3cb47c] text-white p-2 rounded-[10px]">Hurry Up!</button>
          </div>
          <div className="box p-5 bg-[#feefea] h-[200px] flex flex-col justify-between items-center text-center rounded-[10px]">
            <h4 className="text-[#3cb47c]">14% Discount</h4>
            <p className="text-[18px] font-medium">Brands are currently available at cheap</p>
            <button className="bg-[#3cb47c] text-white p-2 rounded-[10px]">Shop Now</button>
          </div>
          <div className="box p-5 bg-[#c4f5df] h-[200px] flex flex-col justify-between items-center text-center rounded-[10px]">
            <h4 className="text-[#3cb47c]">14% Discount</h4>
            <p className="text-[18px] font-medium">Get a surprise discount by registering!</p>
            <button className="bg-[#3cb47c] text-white p-2 rounded-[10px]">Register Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount;