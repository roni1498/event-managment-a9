import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div>
      <div>
        
        <div className="relative">
          <Banner></Banner>
        </div>
        <div className="absolute w-full top-0 bg-black bg-opacity-30">
          <Navbar></Navbar>
        </div>
      </div>
      <AboutUs></AboutUs>
      <Services></Services>
    </div>
  );
};

export default Home;
