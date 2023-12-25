import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces/auth.interface";
import {authService} from "../../services/auth.service";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const RegisterPage=()=>{
    const {register,reset,handleSubmit} = useForm<IAuth>()
    const [error,setError] = useState<boolean>(null)
    const navigate =useNavigate()

    const registerUser:SubmitHandler<IAuth> =async (user)=>{
       try{
           await authService.register(user)
           setError(false)
           navigate('/login')
       }catch (e) {
           setError(true)
       }
    }
    return(<div>
        <form onSubmit={handleSubmit(registerUser)}>
            <input type={"text"} placeholder={'username'} {...register('username')}/>
            <input type={"text"} placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            {error && <div>Username is already exist</div>}
        </form>
    </div>)
}