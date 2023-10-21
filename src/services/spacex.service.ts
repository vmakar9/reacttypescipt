import {IRes} from "./axios.service";
import {ISpacex} from "../interfaces/spacex.interface";
import {spacexAxiosService} from "./spacex.axios.service";
import {urls} from "../urls/urls";

const spacexService={
    getAll:():IRes<ISpacex[]> => spacexAxiosService.get(urls.launches)
}

export {spacexService}