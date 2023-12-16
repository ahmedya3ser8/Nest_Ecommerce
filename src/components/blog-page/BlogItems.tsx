import { FaArrowRight } from "react-icons/fa";

function BlogItems() {
  const blogData = [
    {imgURL: '/images/blog/blog-01.png', title: 'The Easy Italian Chicken Dinner'},
    {imgURL: '/images/blog/blog-02.png', title: 'The litigants on the screen are not actors'},
    {imgURL: '/images/blog/blog-03.png', title: 'How I Prep a Week Summer Meals'},
    {imgURL: '/images/blog/blog-04.png', title: 'Baked Mozzarella Chicken Rolls'},
    {imgURL: '/images/blog/blog-05.png', title: 'The Best Soft Chocolate Chip Cookies'},
    {imgURL: '/images/blog/blog-06.png', title: 'Sticky Ginger Rice Bowls with Pickled'},
    {imgURL: '/images/blog/blog-07.png', title: 'The Absolute Easiest Spinach and Pizza'},
    {imgURL: '/images/blog/blog-08.png', title: 'Sticky Ginger Rice Bowls with Pickled Veg'},
    {imgURL: '/images/blog/blog-09.png', title: 'Smoky Beans & Greens Tacos with Aji Verde'},
    {imgURL: '/images/blog/blog-10.png', title: 'Almond Butter Chocolate Chip Zucchini Bars'},
  ]
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-5">
          {blogData.map((item, index) => (
            <div className="box flex justify-between items-center flex-col lg:flex-row gap-5 border-[1px] border-solid border-[#ccc] p-[10px] lg:p-5 transition-all duration-[3s] hover:translate-y-[-10px] rounded-[10px]" key={index}>
              <img src={item.imgURL} alt="blog-img" className="h-[300px] rounded-[10px]" />
              <div className="info lg:p-5">
                <h2 className="text-[#222] text-[30px] lg:text-[35px] mb-4">{item.title}</h2>
                <p className="text-[#777] text-[17px] w-full lg:w-2/3 mb-4">
                  Tortor, lobortis semper viverra ac, 
                  molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl,
                  in faucibus nunc et aenean turpis dui dignissim nec scelerisque
                </p>
                <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
                  <div className="flex items-center text-[#777] text-[14px] gap-5">
                    <span>February 19, 2022</span>
                    <span>Breakfast</span>
                    <span>Post a Comment</span>
                  </div>
                  <button className="flex items-center text-[#3cb47c] text-[14px] gap-1">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogItems;