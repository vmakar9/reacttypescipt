import {useAppLocation} from "../../hooks/useAppLocation";
import {ICar} from "../../interface/car.interface";
import {SelectedCar} from "../Cars/SelectedCars";

export const SelectedCarPage=()=>{
    const {state:{car}} =useAppLocation<{car:ICar}>()
return(<div>
    {car && <SelectedCar car={car}/>}
</div>)
}