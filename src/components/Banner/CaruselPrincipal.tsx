// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./Banner.module.css"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const CaruselPrincipal = () => {
  return (
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide><img className={styles.imagenes} src="public/img/a.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.imagenes} src="public/img/b.jpg"alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.imagenes} src="public/img/c.jpg" alt="" /></SwiperSlide>
      </Swiper> 
  )
}

export default CaruselPrincipal