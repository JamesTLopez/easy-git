import React,{useContext} from 'react'

import UserProvider from "../../context"


const Profile: React.FC = () => {
    const {state} = useContext(UserProvider);
    const UserData = state.userInfo;


    const updateState = () =>{
        console.log(state);
    
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
                            {/* <table>
                                <tr>
                                    <th>Login:</th>
                                    <td>{UserData?.login}</td>
                                </tr>
                                <tr>
                                    <th>Login:</th>
                                    <td>{UserData?.login}</td>
                                </tr>
                            </table> */}
                        </div>

                    </div>

                </div>
                <div className="profile-repos">
                    <div className="repository-list">
                        

                        

                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Profile
