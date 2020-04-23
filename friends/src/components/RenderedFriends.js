import React from 'react'; 

const RenderedFriends = (props) => {


    return(
        <div>
            <div>
                
            </div>
            <h2>{props.friend.name}</h2>
            <h3>They are {props.friend.age} years old</h3>
            <p>They E-mail is {props.friend.email}</p>
        </div>
    )
}

export default RenderedFriends; 