import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

class FriendsList extends React.Component {
    state = {
        friendsList:[]
        
    }
    componentDidMount() {
        this.getData();
      }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('res', res)
            this.setState({ 
                friendsList: res.data
            })
        })
        .catch(err => console.log(err.response))
    }

    addData = () => {
        axios
        .get()
        .then()
        .catch()
    }

    render() {
        return(
            <div>
                {this.state.friendsList.map(friend => {
                    return (
                            <h1 key={friend.id}>{friend.name}</h1>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;

