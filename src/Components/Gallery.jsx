import { useEffect, useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setPhotos(data))
      }, [])
    return (
        <div>
            <div className="relative">
          <Banner></Banner>
        </div>
        <div className="absolute w-full top-0 bg-black bg-opacity-30">
          <Navbar></Navbar>
        </div>
        <h2 className='py-6 text-4xl font-semibold text-center mt-28'>OUR <span className='text-yellow-400 font-bold'>GALLERY</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-6 my-10">
      {
        photos.map(photo => <div key={photo.id}><img src={photo.photo} alt="" /></div>)
      }
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Gallery;