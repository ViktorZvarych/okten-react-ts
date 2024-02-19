import {Interface} from "node:readline";

import {ICar} from "../interfaces/carInterface";
import {FC} from "react";
import Car from "./Car";

interface IProps {
    cars: ICar[]
}

const Cars: FC<IProps> = ({cars}) => {
    console.log('render Cars');

    return (
        <div>
            <h2>Cars</h2>
            <ul>{cars.map(car => <li key={car.id}><Car car={car}/></li>)}</ul>
        </div>
    );
};

export default Cars;