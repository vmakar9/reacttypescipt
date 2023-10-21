import axios from "axios";
import {spaceXURL} from "../urls/urls";

const spacexAxiosService = axios.create({baseURL:spaceXURL})

export {spacexAxiosService}