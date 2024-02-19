import {AxiosResponse} from "axios";
import {ICar} from "../interfaces/carInterface";

type IResponse<T> = Promise<AxiosResponse<T>>;

export type {IResponse};