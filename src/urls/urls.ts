const baseURL = "http://owu.linkpc.net/carsAPI/v2"

const cars = '/cars'
const auth = '/auth'
const users = '/users'

const urls={
    auth:{
        login:auth,
        refresh:`${auth}/refresh`,
        register:users,
        me:`${auth}/me`
    },
    cars:{
        base:cars,
        byId:(id:number):string =>`${cars}/${id}`,
        photoById:(id:number):string => `${cars}/${id}/photo`
    }
}

export {baseURL,urls}