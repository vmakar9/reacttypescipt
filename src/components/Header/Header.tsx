import css from "./Header.module.css"
import {NavLink} from "react-router-dom";
export const Header=()=>{
    return(<div className={css.Header}>
        <NavLink to={'home'}>Home</NavLink>
        <NavLink to={'cars'}>Cars</NavLink>
    </div>)
}