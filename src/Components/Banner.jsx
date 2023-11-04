import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full bg-black lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full object-cover opacity-60" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className='absolute bottom-14 lg:left-14 left-20'>
          <h3 className='lg:text-5xl text-3xl text-white mb-6'>Designing and Planning <span className='text-amber-400 font-semibold'>Exceptional Events</span></h3>
          <button className=' text-xl px-4 py-2 bg-orange-600 hover:bg-slate-700 rounded-lg text-white font-semibold'>Learn More</button>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full object-cover opacity-60" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
            <div className='absolute bottom-14 lg:left-14 left-20'>
          <h3 className='lg:text-5xl text-3xl text-white mb-6'>Designing and Planning <span className='text-orange-600 font-semibold'>Exceptional Events</span></h3>
          <button className=' text-xl px-4 py-2 bg-orange-600 hover:bg-slate-700 rounded-lg text-white font-semibold'>Learn More</button>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full object-cover opacity-60" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
            <div className='absolute bottom-14 lg:left-14 left-20'>
          <h3 className='lg:text-5xl text-3xl text-white mb-6'>Designing and Planning <span className='text-teal-400 font-semibold'>Exceptional Events</span></h3>
          <button className=' text-xl px-4 py-2 bg-orange-600 hover:bg-slate-700 rounded-lg text-white font-semibold'>Learn More</button>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full object-cover opacity-60" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
            <div className='absolute bottom-14 lg:left-14 left-20'>
          <h3 className='lg:text-5xl text-3xl text-white mb-6'>Designing and Planning <span className='text-orange-600 font-semibold'>Exceptional Events</span></h3>
          <button className=' text-xl px-4 py-2 bg-orange-600 hover:bg-slate-700 rounded-lg text-white font-semibold'>Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;