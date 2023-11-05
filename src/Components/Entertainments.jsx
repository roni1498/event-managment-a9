import Banner from "./Banner";
import Navbar from "./Navbar";
import entertainmentPhoto from "../assets/entertainment.jpg"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";


const Entertainments = () => {
    useEffect(() =>{
        AOS.init()
      },[])
    return (
        <div>
             <div className="relative">
          <Banner></Banner>
        </div>
        <div className="absolute w-full top-0 bg-black bg-opacity-30">
          <Navbar></Navbar>
        </div>
        <h2 className='py-6 text-4xl font-semibold text-center mt-28'>FINEST DJ, BANDS, MUSICIANS AND <span className='text-yellow-400 font-bold'>ENTERTAINMENT</span></h2>
        <div id='about-us' className="hero max-w-7xl mx-auto mb-28">
        
        <div className="hero-content flex-col-reverse lg:flex-row-reverse" data-aos = "fade-left">
          <img src={entertainmentPhoto} className="lg:max-w-lg lg:h-[400px] max-w-sm rounded-lg shadow-2xl" />
          <div data-aos = "fade-right">
           
            <p className="px-6 pb-6 text-xl">We provide all you need for a perfect party whatever the size, theme or location. From the importance of delectable catering, perfect venue sourcing or beautiful marquees, fabulous props, creative floral displays, stunning lighting, music and entertainment. With meticulous attention to detail, whatever the size or budget. Providing you and your guests a unique experience in the UK or Overseas.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Entertainments;