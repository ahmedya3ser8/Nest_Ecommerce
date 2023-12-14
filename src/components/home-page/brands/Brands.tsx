'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function Brands() {
  const brands = [
    {imgUrl: '/images/brands/brand-01.png', category: 'Eco Market', item: 'item 1'},
    {imgUrl: '/images/brands/brand-02.png', category: 'Shop Grocery', item: 'item 2'},
    {imgUrl: '/images/brands/brand-03.png', category: 'Vegan Market', item: 'item 3'},
    {imgUrl: '/images/brands/brand-04.png', category: 'Family', item: 'item 4'},
    {imgUrl: '/images/brands/brand-05.png', category: 'Bio Market', item: 'item 5'},
    {imgUrl: '/images/brands/brand-06.png', category: 'Farmers Market', item: 'item 6'},
    {imgUrl: '/images/brands/brand-07.png', category: 'Green Basket', item: 'item 7'},
    {imgUrl: '/images/brands/brand-08.png', category: '100% Organic', item: 'item 8'},
    {imgUrl: '/images/brands/brand-09.png', category: 'The Green', item: 'item 9'},
    {imgUrl: '/images/brands/brand-10.png', category: 'Health Store', item: 'item 10'},
  ]
  return (
    <div className='py-8'>
      <div className="container">
        <Swiper 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          mousewheel={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide className='border-2 border-solid border-[#f6f6f6] rounded-[10px]' key={index}  >
              <div className="flex justify-around items-center p-4 h-[100px]">
                <img src={brand.imgUrl} alt="brand-img" className='w-[70px]' />
                <div className="brand-info">
                  <span className='block'>{brand.category}</span>
                  <span>{brand.item}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Brands;