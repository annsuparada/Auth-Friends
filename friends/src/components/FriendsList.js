import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsForm from './FriendsForm'
import { Card } from 'semantic-ui-react'

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
                <Card.Group>
                    {this.state.friendsList.map(friend => {
                        return (
                            
                                <Card key={friend.name}>
                                    <Card.Content>
                                        <Card.Header>{friend.name}</Card.Header>
                                        <Card.Meta>Age: {friend.age}</Card.Meta>
                                        <Card.Description>{friend.email}</Card.Description>
                                    </Card.Content>
                                </Card>
                        )
                    })}
                    </Card.Group>
            </div>
        )
    }
}

export default FriendsList;

