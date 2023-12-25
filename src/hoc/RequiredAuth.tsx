import {FC, PropsWithChildren, ReactElement} from "react";
import {authService} from "../services/auth.service";
import {Navigate} from "react-router-dom";

interface IProps {
    children:ReactElement
}

export const RequiredAuth:FC<IProps>=({children})=>{
    const access = authService.getAccessToken();

    if(!access){
        return <Navigate to={'/login'}/>
    }

    return children
}