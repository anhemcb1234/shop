import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Buy from './Buy'
AOS.init();

function Listitems() {
    return (
        <div className="container" >
            <div className="row " data-aos="zoom-in">
                <div className="column-2">
                    <p className='title__list'>Featured products</p>
                    <div className="listitems">
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={30}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            className='listitems__item'
                        >
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-1.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-2.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-3.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-5.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-1.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-5.png')} />
                                <Buy /> 
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-3.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='banner__container buy__button'>
                                <img className='banner' src={require('../img/products/product-4.png')} /> 
                                <Buy />
                            </div>
                            <p>Christmas cup</p>
                            <span>$15.99</span>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Listitems