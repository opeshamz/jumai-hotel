import React from 'react';
import Banner from '../Components/Banner';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import  {Link} from 'react-router-dom';


 
const Slider = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    spaceBetween: 0,
    speed:2000,
   effect: 'fade',
    responsive:true,
    loop: true,
  }
 
  return(
    <Swiper {...params} >
      <div className="defaultHero"><Banner title="welcome to jumai hotel & suites"><Link to="/room" className="btn-primary">Our rooms</Link></Banner></div>
      
      <div className="defaultHero2"><Banner title="environmental friendly"><Link to="/room" className="btn-primary">Our rooms</Link></Banner></div>
      <div className="defaultHero3"> <Banner title="relaxable envroment"><Link to="/room" className="btn-primary">Our rooms</Link></Banner></div>
      <div className="defaultHero4"> <Banner title="car pack"><Link to="/room" className="btn-primary">Our rooms</Link></Banner></div>
    </Swiper>
  )
}
 
export default Slider;
