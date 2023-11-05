import { useEffect } from 'react';
import aboutPhoto from '../assets/AboutUs.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() =>{
    AOS.init()
  },[])
    return (
        <div id='about-us' className="hero min-h-screen max-w-7xl mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse" data-aos = "fade-left">
          <img src={aboutPhoto} className="lg:max-w-lg lg:h-[400px] max-w-sm rounded-lg shadow-2xl" />
          <div data-aos = "fade-right">
            <h1 className="text-5xl font-bold">About us</h1>
            <h2 className='py-6 text-4xl font-semibold'>WELCOME TO <span className='text-yellow-400 font-bold'>EVENTWISH CREATIONS</span></h2>
            <p className="px-6 pb-6 text-xl">We provide all you need for a perfect party whatever the size, theme or location. From the importance of delectable catering, perfect venue sourcing or beautiful marquees, fabulous props, creative floral displays, stunning lighting, music and entertainment. With meticulous attention to detail, whatever the size or budget. Providing you and your guests a unique experience in the UK or Overseas.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;