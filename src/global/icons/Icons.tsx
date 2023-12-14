
function Icons() {
  const iconsInfo = [
    {imgUrl: '/images/icons/icons-01.png', offer: 'Best offers', desc: 'Orders $50 or more'},
    {imgUrl: '/images/icons/icons-02.png', offer: 'Free delivery', desc: '24/7 amazing services'},
    {imgUrl: '/images/icons/icons-03.png', offer: 'Great daily deal', desc: 'When you sign up'},
    {imgUrl: '/images/icons/icons-04.png', offer: 'Wide assortment', desc: 'Mega Discounts'},
    {imgUrl: '/images/icons/icons-05.png', offer: 'Easy returns', desc: 'Within 30 days'},
  ]

  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {iconsInfo.map((itemIcon, index) => (
            <div className="box-icon flex flex-col lg:flex-row justify-between items-center bg-[#eee] p-[10px_15px] rounded-[6px] gap-2 group" key={index}>
              <img src={itemIcon.imgUrl} alt="icons-img" className="w-[60px] transition-all duration-1000 group-hover:translate-y-[-5px]" />
              <div className="mt-2 lg:mt-0">
                <span className="text-[18px] text-[#666]">{itemIcon.offer}</span>
                <p className="text-[14px] text-[#777]">{itemIcon.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Icons;