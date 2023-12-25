import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authService} from "../../services/auth.service";
import {authActions} from "../../redux/slice/authSlice";

export const Header=()=>{
    const {me} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    if(authService.getAccessToken()&& !me){
        dispatch(authActions.me)
    }


    return(<div>
        {
            me?
                <div>{me.username} -- {new Date(me.last_login).toDateString()}</div>
                :<div>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </div>
        }

    </div>)
}