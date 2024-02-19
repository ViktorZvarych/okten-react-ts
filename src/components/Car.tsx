import {FC} from "react";

import {ICar} from "../interfaces/carInterface";

interface IProps {
   car: ICar
}

const Car:FC<IProps> = ({car}) => {
    console.log('render Car');

    const {id, brand, year, price} = car

    return (
        <div>
            <h2>Car</h2>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>year: {year}</p>
            <p>price: {price}</p>
        </div>
    );
};

export default Car;