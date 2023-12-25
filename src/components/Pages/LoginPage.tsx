import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces/auth.interface";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authActions} from "../../redux/slice/authSlice";
import {useNavigate} from "react-router-dom";

export const LoginPage=()=>{
    const {register,handleSubmit} = useForm<IAuth>()
    const {error} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const login:SubmitHandler<IAuth>= async (user)=>{
        const {meta:{requestStatus}} =  await dispatch(authActions.login({user}))
        if(requestStatus === 'fulfilled'){
            navigate('/cars')
        }
    }
    return(<div>
          <form onSubmit={handleSubmit(login)}>
              <input type={"text"} placeholder={'username'} {...register('username')}/>
              <input type={"text"} placeholder={'password'} {...register('password')}/>
              <button>Login</button>
              {error && <div>Username or password is invalid</div>}
          </form>
    </div>)
}