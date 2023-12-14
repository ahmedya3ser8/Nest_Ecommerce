import { Link } from "react-router-dom";

function Features() {
  const imgs = [
    {imgUrl: '/images/feature/feature-01.png'},
    {imgUrl: '/images/feature/feature-02.png'},
    {imgUrl: '/images/feature/feature-03.png'},
    {imgUrl: '/images/feature/feature-04.png'},
  ]
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {imgs.map((item, index) => (
            <div className="box relative" key={index}>
              <div className="box-img relative">
                <img src={item.imgUrl} alt="feature-img" className="w-full rounded-[10px]" />
              </div>
              <div className="absolute right-[10px] top-[30%]">
                <p className="text-[#777] mb-2">Everyday Fresh with <br  /> Our Products</p>
                <Link to={"#"} className="text-[14px] text-[#777]">Go to supplier</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;