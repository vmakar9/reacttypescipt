import {useEffect, useState} from "react";
import {IPost} from "../../../interfaces/post.interface";
import {postService} from "../../../services/post.service";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

export const Posts =()=>{
    const [posts,setPosts] = useState<IPost[]>([])
    const [postDetails,setPostDetails] = useState<IPost>(null)

    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[])
    const click = async (id:number):Promise<void>=>{
        const {data}= await postService.getById(id);
        setPostDetails(data)
    }

    return(<div>
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
        <hr/>
        <div>
            {posts.map(post=><Post key ={post.id} post={post} click={click}/>)}
        </div>
    </div>)
}