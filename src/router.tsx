import {createBrowserRouter, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {Home} from "./components/pages/Home";
import {CarsPage} from "./components/pages/CarsPage";
import {SelectedCarPage} from "./components/pages/SelectedCarPage";

export const router= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
            {index:true,element:<Navigate to={'home'}/>},
            {path:'home',element:<Home/>},
            {path:'cars',element:<CarsPage/>,children:[
                    {path:'select',element:<SelectedCarPage/>}
                ]}
        ]}
])