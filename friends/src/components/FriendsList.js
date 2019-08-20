import React from 'react'

class FriendsList extends React.Component {
    state = {
        friendsList:[]
    }
    componentDidMount() {
        this.getData();
      }

    render() {
        return(
            <div>
                This is FriendsList
            </div>
        )
    }
}

export default FriendsList;

