import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsForm from './FriendsForm'

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
    
     addData = (friend) => {
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            this.setState({
                friendsList: [...res.data, this.state.friendsList]
            })
            
        })
        .catch()
    }
     

    render() {
        return(
            <div>
                <FriendsForm addData={this.addData} />
                {this.state.friendsList.map(friend => {
                    return (
                        <div key={friend.name}>
                            <h1>{friend.name}</h1>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;

