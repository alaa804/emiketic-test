import React , { useState } from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import albums from '../albums'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Addcarousel = () => {
 
    const [carousels] = useState(albums) 

  return (
    <div className="container">
     <div className="text">
        <h2>Blog</h2>
      <div className="border"></div>
     </div>
          <Swiper
      spaceBetween={10}
      slideToClickedSlide={false}
      slidesPerView={3}
       navigation
       preventInteractionOnTransition={{ clickable : true}}
       pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   
        <div className="carousel-container">
             {carousels.map((carousel) => (
         <SwiperSlide key={carousel._id} carousel-container>
           <div className="carousel-image">
             <img src={carousel.image} alt=''/>
            <div className="description">
               {carousel.description}
            </div>
           </div>
         </SwiperSlide>
       ))}
         
        </div>
    </Swiper>
    </div>
  )
}

export default Addcarousel
