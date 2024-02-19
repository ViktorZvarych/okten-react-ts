import {apiService} from "./apiService";
import {AxiosResponse} from "axios";

import {urls} from "../constants/urls";
import {ICar} from "../interfaces/carInterface";
import {IResponse} from "../types/apiResponseType";

const carsService = {
    getAll: (): IResponse<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IResponse<ICar> => apiService.post(urls.cars.base),
    update: (id: number, data: ICar): IResponse<ICar> => apiService.put(urls.cars.byId(id)),
    delete: (id: number): IResponse<void> => apiService.put(urls.cars.base)
}

export {carsService}