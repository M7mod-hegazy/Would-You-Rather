import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Form,
    Button,
    Container,
} from 'react-bootstrap'

import { handleSaveQuestionAnswer } from '../actions/users'

class Question extends Component {

    state = {
        value: ''
    };

    handleChange = (e) => {
        const value = e.target.value

        this.setState(() => ({
            value
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.value !== '') {
            const { authedUser, question, dispatch } = this.props;
            dispatch(handleSaveQuestionAnswer(authedUser, question.id, this.state.value))
        }
    };

    render() {
        const { question } = this.props
        const { value } = this.state

      

        return (
            <div className="answer">
                <Form onSubmit={this.handleSubmit}>
                    <Container className="my-3">
                    <h4 >Would You Rather?</h4>

                        <Form.Check
                            type='radio'
                            name='options'
                            label={question.optionOne.text}
                            value='optionOne'
                            onChange={this.handleChange}
                            id={question.optionOne.text}
                        />
                        <Form.Check
                            type='radio'
                            name='options'
                            label={question.optionTwo.text}
                            value='optionTwo'
                            onChange={this.handleChange}
                            id={question.optionTwo.text}
                        />
                        <Button
                            type='submit'
                            variant="primary"
                            disabled={value === ''}
                        >Submit</Button>
                    </Container>
                </Form>
            </div>
        )
    }
}


function mapStateToProps({ authedUser, questions }, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: question ? question : null
    };
}

export default connect(mapStateToProps)(Question)