import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from '../actions/questions'
import {
    Form,
    Button
} from 'react-bootstrap'


class AddQuestion extends Component {

    state = {
        toHome: false,
        optionOne: '',
        optionTwo: ''
    };
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault()
        const { authedUser, dispatch } = this.props
        const { optionOne, optionTwo } = this.state

        this.setState({
            optionOne: '',
            optionTwo: ''
        },
            () => dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser))
        )

        this.setState({ toHome: true })
    }

    render() {
        const { toHome, optionOne, optionTwo } = this.state
        if (toHome === true) {
            return <Redirect to="/" />;
        }

        return (
            <div className="addQuestion text-center">
                <h3 >Would You Rather</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            id="optionOne"
                            type="text"
                            placeholder="OptionOne"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <h3>OR</h3>

                    <Form.Group className="mb-3">
                        <Form.Control
                            id="optionTwo"
                            type="text"
                            placeholder="OptionTwo"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={
                            optionOne === '' || optionTwo === ''
                        }>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)