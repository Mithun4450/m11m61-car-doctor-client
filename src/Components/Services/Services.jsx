// import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import useServices from "../../hooks/useServices";


const Services = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setServices(data)
    //         })
    // },[])

    const services = useServices();

    return (
        <div className="my-14">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811] mb-2 ">Service</h3>
                <h1 className="text-5xl font-bold mb-2">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service ={service}
                    
                    ></ServiceCard>)

                }
               
            </div>
            <div className="mx-auto  text-center my-8">
                    <button className="btn btn-outline  text-[#FF3811] border-[#FF3811]">More Services</button>
            </div>
            
        </div>
    );
};

export default Services;