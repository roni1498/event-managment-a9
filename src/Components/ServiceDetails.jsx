import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const ServiceDetails = () => {
    const services = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const service = services.find(service => service.id === idInt)
    console.log(services, id)
    return (
        <div>
            <div className="bg-black">
            <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={service.photo} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{service.title}</h1>
            <p className="py-6 font-xl">{service.longDescription}</p>
            <button className="btn btn-primary rounded-xl">Get Started</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;