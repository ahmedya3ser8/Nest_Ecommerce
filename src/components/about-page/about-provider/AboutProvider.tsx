import { Link } from "react-router-dom";

function AboutProvider() {
  const iconsProvider = [
    {imgUrl: '/images/icons/icons-01.png', title: 'Best Prices & Offers'},
    {imgUrl: '/images/icons/icons-02.png', title: 'Wide Assortment'},
    {imgUrl: '/images/icons/icons-03.png', title: 'Free Delivery'},
    {imgUrl: '/images/icons/icons-04.png', title: 'Easy Returns'},
    {imgUrl: '/images/icons/icons-05.png', title: '100% Satisfaction'},
    {imgUrl: '/images/icons/icons-06.png', title: 'Great Daily Deal'}
  ]
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="relative text-center text-[30px] text-[#777] font-bold before:content-['aaaaaaaaa'] before:absolute before:top-[5px] before:left-1/2 before:text-transparent before:translate-x-[-50%] before:decoration-wavy before:underline before:decoration-[#bce3c9] before:decoration-[5px]">What We Provide?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
          {iconsProvider.map((item, index) => (
            <div className="box p-5 border-[1px] border-solid border-[#ccc] text-center rounded-[10px]" key={index}>
              <img src={item.imgUrl} alt="icons-img" className="w-[100px] m-auto mb-2" />
              <h2 className="text-[25px] text-[#222] mb-3">{item.title}</h2>
              <p className="text-[18px] text-[#777] mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
              <Link to="#" className="text-[#3cb47c] text-[18px] transition-colors duration-300 hover:text-[#c25]">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutProvider;