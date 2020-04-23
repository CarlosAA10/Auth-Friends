import React, { useState, useEffect } from 'react'; 

import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import RenderedFriends from './RenderedFriends';  



const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([]); 
    const [newFriend, setNewFriend] = useState({
        id: Date.now() + Math.random(), 
        name: '', 
        age: '', 
        email: ''
    })

    const getFriends = () => {

       
        // axios
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                console.log('the res data in FL.js', res)
                setFriendsList(res.data); 
                console.log('new added friends', friendsList); 
            })
            .catch(err => {
                console.log(err)
            })
    }; 

    useEffect(() => {
        getFriends()
    }, [])

    const handleFriendsChange = e => {
        setNewFriend({
            ...newFriend, 
            [e.target.name]: e.target.value
        })
    }; 

    const submitFriend = e => {
        e.preventDefault(); 

        axiosWithAuth()
            .post('api/friends', newFriend)
            .then(res => {
                setFriendsList(res.data); 
                console.log('successful friend added', friendsList); 
                setNewFriend({
                    id:Date.now() + Math.random(), 
                    name: '', 
                    age: '', 
                    email: ''
                }); 
            })
            .catch(err => {
                console.log(err); 
            })

    }





    return (
        <div>

            <form onSubmit={submitFriend}>
                <label htmlFor="name">
                    Name:
                    <input
                    type="text" 
                    id="name"
                    name="name"
                    value={newFriend.name}
                    onChange={handleFriendsChange}
                    />
                </label>

                <label htmlFor="age">
                    Age: 
                    <input
                    type="text" 
                    id="age"
                    name="age"
                    value={newFriend.age}
                    onChange={handleFriendsChange}
                    />
                </label>

                <label htmlFor="email">
                    Email: 
                    <input
                    type="text" 
                    id="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleFriendsChange}
                    />
                </label>

                <button>Submit Friend</button>

            </form>

            <h2>Friends list</h2>
            {friendsList.map(friend => {
                return <RenderedFriends friend={friend} key={friend.id} /> 
            })}
        </div>
    )
}; 

export default FriendsList; 