import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import SwiperCore, {
//     Autoplay,Pagination,Navigation
//   } from 'swiper';
// SwiperCore.use([Autoplay,Pagination,Navigation]);
// import 'swiper/css/scrollbar';
function Slider() {
    return (
        <div className='container top'>
            <div>
                            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                <SwiperSlide>
                    <div className='banner__container'>
                    <img className='banner' src={require('../img/banner/banner-2.jpg')} /> 
                    
                    </div>
                    <div className='banner__desc'>
                        <p>Merry christmas</p>
                        <h1>Get 70% Off</h1>
                        <button>
                            <a>SHOP NOW</a>
                                <img className='snow' src={require('../img/snow-2.png')} /> 
                                <img className='snow1' src={require('../img/snow-1.png')} /> 
                            </button>
                    </div>
                    
                    </SwiperSlide>
                <SwiperSlide>
                <div className='banner__container'>
                    <img className='banner' src={require('../img/banner/banner-1.jpg')} /> 
                    </div>
                    <div className='banner__desc'>
                        <p style={{color:'red'}}>Merry christmas</p>
                        <h1 style={{color:'red'}}>Get 70% Off</h1>
                        <button><a>SHOP NOW</a></button>
                    </div>
                    </SwiperSlide>
                </Swiper>
        </div>
        </div>
    )
}
export default Slider