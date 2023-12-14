
function Hero() {
  return (
    <div className="hero pt-8 pb-6">
      <div className="container">
        <div className="lg:flex lg:gap-5 h-[500px] ">
          <div className="w-full lg:w-2/3 relative border-[3px] border-dashed border-[#0000001f] p-2 rounded-[10px] h-full">
            <img src="/images/hero/hero-01.png" alt="hero-img" className="w-full h-full object-cover rounded-[10px]" />
            <div className="absolute left-16 top-1/2 translate-y-[-50%] p-2 lg:p-0">
              <span className="text-[#3cb47c] text-[18px] font-medium block mb-[10px] lg:mb-0">Exclusive Offer - 30%</span>
              <h1 className="text-[#253d4e] font-bold text-[25px] mb-[10px] lg:text-[60px] lg:mb-0">Feed your family at <br /> best price</h1>
              <button className="p-[10px] bg-[#3cb47c] text-white font-medium rounded-[15px]">shop now</button>
            </div>
          </div>
          <div className="hidden lg:w-1/3 lg:flex lg:flex-col lg:gap-[10px]">
            <div className="h-[49%] relative border-[3px] border-dashed border-[#0000001f] p-2 rounded-[10px]">
              <img src="/images/hero/hero-02.png" alt="hero-img" className="w-full h-full object-cover rounded-[10px]" />
              <div className="absolute left-10 top-1/2 translate-y-[-50%] p-3">
                <div className="flex items-center gap-5">
                  <p className="text-[22px] text-[#666]">The best Organic <br /> Products Online</p>
                  <span className="text-[18px] bg-[#ffd55a] w-[90px] h-[90px] rounded-full flex justify-center items-center text-center">Save to 50%</span>
                </div>
                <p className="text-[18px] text-[#3cb47c]">Save to 50%</p>
              </div>
            </div>
            <div className="h-[49%] relative border-[3px] border-dashed border-[#0000001f] p-2 rounded-[10px]">
              <img src="/images/hero/hero-03.png" alt="hero-img" className="w-full h-full object-cover rounded-[10px]" />
              <div className="absolute left-10 top-1/2 translate-y-[-50%] p-3">
                <p className="text-[22px] text-[#666] mb-5">
                  Everyday Fresh & <br />
                  Clean with Our <br />
                  Products
                </p>
                <button className="p-[10px] bg-[#3cb47c] text-white font-medium rounded-[15px]">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;