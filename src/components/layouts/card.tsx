import React from 'react'

interface Props{
    id:any;
    name:string;
    owner_url:string;
    html_url:string;
    owner_name:string;

}

const card: React.FC<Props> = ({id,name,owner_url,html_url,owner_name}) => {
    return (
        <div key={id} className="card">
            <div className="card-container">
                <div className="image-area">
                    <img src={owner_url} alt="Owner Url"></img>
                </div>
                <div className="info-area">
                    <label>{name}</label>
                    <label>{owner_name}</label>
                </div>
            </div>
        </div>
    )
}

export default card
