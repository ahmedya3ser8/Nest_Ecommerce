
function Blog() {
  const imgsItems = [
    {imgUrl: '/images/blogs/blog-01.png'},
    {imgUrl: '/images/blogs/blog-02.png'},
    {imgUrl: '/images/blogs/blog-03.png'},
    {imgUrl: '/images/blogs/blog-04.png'}
  ]

  return (
    <section className="blog bg-[#eee] pt-8">
      <div className="container">
        <h2 className='text-[25px] font-bold text-[#333] text-center mb-3'>Our Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {imgsItems.map((item, index) => (
            <div className="p-5 transition-all duration-[2s] hover:translate-y-[-10px]" key={index}>
              <img src={item.imgUrl} alt="blog-img" className='w-full rounded-[6px]' />
              <div className="mt-2 text-center">
                <span className='block text-[#777]'>Breakfast</span>
                <h2 className='text-[20px]'>Sticky Ginger Rice Bowls with Pickled Veg</h2>
                <div className="flex justify-between items-center gap-5 mt-2">
                  <span className='text-[#777] text-[14px]'>February 19, 2022</span>
                  <span className='text-[#777] text-[14px]'>Post a Comment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog;