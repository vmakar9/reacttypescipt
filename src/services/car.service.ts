import {IRes} from "../types/response.type";
import {ICar} from "../interfaces/car.interface";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";

const carService={
    getAll:():IRes<ICar[]>=> apiService.get(urls.cars.base),
    create:(data:ICar):IRes<ICar>=> apiService.post(urls.cars.base,data),
    updateById:(id:number,data:ICar):IRes<ICar>=>apiService.put(urls.cars.byId(id),data),
    deleteById:(id:number):IRes<void>=>apiService.delete(urls.cars.byId(id))
}

export {carService}