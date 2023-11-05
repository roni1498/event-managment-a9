import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
    return (
        <div id="services" className="">
  <div className=" ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">TYPE OF PARTIES & EVENTS</h1>
      <p className="py-6 text-lg">Weddings, Birthday Parties, Anniversaries,Engagement Parties, Retirement Parties, Outdoor Picnic, etc.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
      {
        services.map(service => <Service key={service.id} service={service}></Service>)
      }
    </div>
  </div>
</div>
    );
};

export default Services;