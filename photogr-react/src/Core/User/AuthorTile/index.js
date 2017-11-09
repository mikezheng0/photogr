import React from 'react'

const AuthorTile = ({user}) => (
    <div>
        <img src={user.img.path} alt={user.name}/>
        <h4>{user.name}</h4>
        <p>{user.type}</p>
    </div>
)

export default AuthorTile