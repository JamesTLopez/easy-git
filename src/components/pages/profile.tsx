import React, { useContext } from 'react'

import UserProvider from "../../context"
import Card from "../layouts/card"


const Profile: React.FC = () => {
    const { state } = useContext(UserProvider);
    const UserData = state.userInfo;
    const UserRepo = state.userRepos;


    const updateState = () => {
        console.log(UserRepo[0])
    }



    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-title">
                    <div className="user-picture">
                        <img src={UserData.avatar_url} alt="Alt"></img>
                        <p>{UserData.login}</p>

                        <button onClick={updateState}>State Changer Test</button>
                    </div>
                    <div className="user-info">
                        <div className="list">
                            <div className="row-1">
                                <div className="item">
                                    <label>Login: </label>
                                    <p>{UserData.login}</p>
                                </div>
                                <div className="item">
                                    <label>Name: </label>
                                    <p>{UserData.name ? UserData.name : 'N/A'}</p>
                                </div>
                                <div className="item">
                                    <label>Company: </label>
                                    <p>{UserData.company ? UserData.company : 'N/A'}</p>
                                </div>
                                <div className="item">
                                    <label>Location: </label>
                                    <p>{UserData.location ? UserData.location : 'N/A'}</p>
                                </div>
                            </div>
                            <div className="row-2">
                                <div className="item">
                                    <label>Hirable: </label>
                                    <p>{UserData.hirable ? UserData.hirable : 'N/A'}</p>
                                </div>
                                <div className="item">
                                    <label>Email: </label>
                                    <p>{UserData.email ? UserData.email : 'N/A'}</p>
                                </div>
                                <div className="item">
                                    <label>Followers: </label>
                                    <p>{UserData.followers ? UserData.followers : 'N/A'}</p>
                                </div>
                                <div className="item">
                                    <label>Following: </label>
                                    <p>{UserData.following ? UserData.following : 'N/A'}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-repos">
                    <div className="repository-list">
                        {(UserRepo.length !== 0) ? (UserRepo.map((repo:any) => (
                            // <h3 key={repo.id}>{repo.name}</h3>
                            <Card key={repo.id} id={repo.id} name={repo.name} owner_url={repo.owner.avatar_url} html_url={repo.html_url} owner_name={repo.owner.login}/>
                        ))) : <h2>No repository to be displayed</h2>}



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
