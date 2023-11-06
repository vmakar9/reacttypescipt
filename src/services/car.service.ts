import {IRes} from "../types/IResTypes";
import {ICar} from "../interface/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const carService={
    getAll:():IRes<ICar[]> => axiosService.get(urls.cars.base),
    create:(data:ICar):IRes<ICar> => axiosService.post(urls.cars.base,data),
    updateById:(id:number, data:ICar):IRes<ICar>=>axiosService.put(urls.cars.byId(id),data),
    deleteById:(id:number):IRes<void> => axiosService.delete(urls.cars.byId(id))
}

export {carService}