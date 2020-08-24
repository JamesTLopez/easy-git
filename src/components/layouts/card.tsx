import React from 'react'

interface Props{
    name:string;
}

const card: React.FC<Props> = ({name}) => {
    return (
        <div className="card">
            <p>{name}</p>
        </div>
    )
}

export default card
