import React, { useEffect, useState } from 'react';




import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-tor-88681.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })


    return (
        <div id="services" className="container text-center">
            <h2 className="text-primary mt-5">Our Services </h2>
            <div className="service-continer">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>

                    )

                }


            </div>

        </div>
    );
};

export default Services;