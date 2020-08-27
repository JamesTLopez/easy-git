import React,{useState, useEffect, useContext} from 'react'

import UserProvider, { User } from "../../context"


const Profile: React.FC = () => {
    const {state} = useContext(UserProvider);
    const [UserData,setUserData] = useState<User>()


    useEffect(() => {

        fetch(`https://api.github.com/users/${state.userLogin}`)
        .then(res => res.json())
        .then(data => {
            setUserData(data)
            console.log("i ran once")
        })

    },[])


    const updateState = () =>{
        console.log(state);
    
      }



    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-title">
                    <div className="user-picture">
                        <img src={UserData?.avatar_url} alt="Alt"></img>
                        <p>{UserData?.login}</p>
                        <p>{state.userLogin}</p>
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
