import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./components/MainLayout/MainLayout";
import {CarsPage} from "./components/Pages/CarsPage";
import {LoginPage} from "./components/Pages/LoginPage";
import {RegisterPage} from "./components/Pages/RegisterPage";
import {RequiredAuth} from "./hoc/RequiredAuth";

export const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/> ,children:[
            {index:true,element:<Navigate to={'cars'}/>},
            {path:'cars',element:<RequiredAuth><CarsPage/></RequiredAuth>},
            {path:'login',element:<LoginPage/>},
            {path:'register',element:<RegisterPage/>},


        ]
    }
])