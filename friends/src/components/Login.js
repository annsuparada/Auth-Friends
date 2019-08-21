import React from 'react';
import axios from 'axios';

import { Button, Form, Segment } from 'semantic-ui-react'

class Login extends React.Component {
    constructor(props){
        super(props)
    
    this.state = {
        credentials: {
            username: '',
            password: ''
        },
        props: this.props
    };
}
    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      login = e => {
        e.preventDefault();
        axios
          .post('http://localhost:5000/api/login', this.state.credentials)
          .then(res => {
              console.log('credentials',this.state.credentials)
              localStorage.setItem('token', res.data.payload)
            })
            .then(res => {
                
                this.state.props.history.push('/protected')
          })
          .catch(err => console.log(err.response));
      };
    render() {
        return(
            <div>
                <Segment inverted>
                    <Form inverted onSubmit={this.login}>
                        
                        <Form.Input 
                            fluid label='First name' 
                            placeholder='Username'
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange} 
                        />
                        
                        <Form.Input 
                            fluid label='Password' 
                            placeholder='Username'
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange} 
                        />
                        
                        <Button>Log in</Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default Login;