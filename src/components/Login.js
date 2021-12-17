import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Card,
    Button,
    Form,
} from 'react-bootstrap'
class Login extends Component {
    state = {
        value: ''
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState(() => ({
            value
        }))
    }
    handleSubmit = e => {
        e.preventDefault()
        const authedUser = this.state.value;
        const { dispatch } = this.props;

        dispatch(setAuthedUser(authedUser))
    }

    render() {
        const { users } = this.props
        const { value } = this.state
        return (
                <div className="logCard">
                    <Card className="text-center">
                        <Card.Header>
                            <h3>Would You Rather App</h3>
                            <span>Please sign in to continue</span>
                        </Card.Header>
                        <Card.Body>
          
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Select
                                    style={{ width: '15rem', margin: '10px auto', textAlign: 'center'}}
                                    onChange={this.handleChange}
                                    // aria-label="Default select example"
                                >
                                    <option value='select' hidden>Select User</option>
                                    {Object.values(users).map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Button
                                    type='submit'
                                    className="login-btn"
                                    disabled={value === ''}
                                >Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)