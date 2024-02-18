import {apiService} from "./apiService";
import {AxiosResponse} from "axios";

import {urls} from "../constants/urls";
import {ICar} from "../interfaces/carInterface";

const carsService = {
    getAll: (): Promise<AxiosResponse<ICar>> => apiService.get(urls.cars.base),
}

export {carsService}