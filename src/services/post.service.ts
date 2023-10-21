import {IPost} from "../interfaces/post.interface";
import {axiosService, IRes} from "./axios.service";
import {urls} from "../urls/urls";


const postService={
    getAll:():IRes<IPost[]> => axiosService.get(urls.posts.base),
    getById:(id:number):IRes<IPost> => axiosService.get(urls.posts.byId(id))
}

export {postService}