const baseURL = "https://jsonplaceholder.typicode.com/"

const spaceXURL = "https://api.spacexdata.com/v3/"

const posts = "posts"


const urls={
    posts:{
        base:posts,
        byId:(id:number):string=>`${posts}/${id}`
    },
    launches:'launches/'
}

export {baseURL,urls,spaceXURL}