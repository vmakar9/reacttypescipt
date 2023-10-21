import {IPost} from "../../../interfaces/post.interface";
import {FC} from "react";


interface IProps{
    post:IPost;
    click:(id:number)=>Promise<void>
}
export const Post:FC<IProps> = ({post,click})=>{
const {id,title}=post

   return(<div>
       <h3>{id}</h3>
       <h3>{title}</h3>
       <button onClick={()=>click(id)}>Get More</button>
   </div>)
}