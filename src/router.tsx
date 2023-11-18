import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./components/MainLayout/MainLayout";
import {CarsPage} from "./components/Pages/CarsPage";

export const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/> ,children:[
            {index:true,element:<Navigate to={'cars'}/>},
            {path:'cars',element:<CarsPage/>}

        ]
    }
])