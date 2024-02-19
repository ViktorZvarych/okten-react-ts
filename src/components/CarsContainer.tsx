import {FC, useEffect, useState} from "react";

import CarForm from "./CarForm";
import {ICar} from "../interfaces/carInterface";
import {carsService} from "../services/carsService";
import Cars from "./Cars";

const CarsContainer = () => {
    console.log('render CarsContainer');

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    })

    return (
        <div>
            <h2>CarsContainer</h2>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarsContainer;