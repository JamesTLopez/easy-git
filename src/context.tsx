import React,{createContext} from 'react'

export interface User {

    login:boolean;
    id:number;
    node_id:string;
    avatar_url:string;
    url:string;
    html_url:string;
    followers_url:string;
    following_url:string;
    gists_url:string;
    starred_url:string;
    subscriptions_url:string;
    organizations_url:string;
    repos_url:string;
    events_url:string;
    received_events_url:string;
    type:string;
    site_admin:boolean;
    name:string;
    company:string;
    blog:string;
    location:string;
    email:string;
    hireable:string;
    bio:string;
    twitter_username:string;
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    created_at:string;
    updated_at:string;
}


interface Iaction{
    type:string;
    payload:any;
}

export interface userState {
    userLogin?:string;

}

export const reducer = (state:userState,action:Iaction):userState =>{
    switch(action.type){
        case'FETCH':
            console.log(action.payload)
            return{
                userLogin:'New'
            }
        default:
            return state
    }
}


export const initState:userState = {
    userLogin:"Lawls"
}


const UserProvider = createContext<userState|any>(initState);
export default UserProvider;
