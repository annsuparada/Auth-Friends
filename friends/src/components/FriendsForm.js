import React, { useRef } from 'react'


const FriendsForm = props => {

    const name = useRef(null)
    const age = useRef(null)
    const email = useRef(null)
    

    const submit = (e) => {
        e.preventDefault()
        console.log('submit', submit)
        
        props.addData({
            name: name.current.value,
            age: age.current.value,
            email: email.current.value

        })
    }

    

    return(
        <div>
            <form onSubmit={submit}>
                <input 
                    type='text'
                    ref={name}
                    placeholder="Name"
                />
                <input
                    type='text'
                    ref={age}
                    placeholder="Age"
                />
                <input
                    type='text'
                    ref={email}
                    placeholder="Email"
                />
                <button>Add friend</button>
            </form>
        </div>
    )
}

export default FriendsForm;