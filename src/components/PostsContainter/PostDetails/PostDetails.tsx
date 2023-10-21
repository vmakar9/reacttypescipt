import {IPost} from "../../../interfaces/post.interface";
import {FC} from "react";

interface IProps{
    postDetails:IPost
}
export const PostDetails:FC<IProps>=({postDetails})=>{
    const {userId,id,title,body} = postDetails

return(<div>
   <h3>{userId}</h3>
    <h3>{id}</h3>
    <h3>{title}</h3>
    <p>{body}</p>
</div>)
}