import React,{useState, useEffect} from 'react'

export interface User {
    login:string;
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

const Profile: React.FC = () => {

    const [User,setUser] = useState<User[]>([])

    useEffect(() => {

        fetch('https://api.github.com/users/example')
        .then(res => res.json())
        .then(data => {
            setUser(data)

            console.log("i ran once")
        })

        

    },[])


    return (
        <div className="profile-container">
            <div className="profile-content">
               
            </div>
        </div>
    )
}

export default Profile
