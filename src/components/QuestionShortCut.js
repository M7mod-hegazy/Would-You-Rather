import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    Button
} from 'react-bootstrap'

class QuestionShortCut extends Component {
    render() {
        const { question } = this.props

        return (
            <div >
                <Card className="ques-peak">
                    <h4>Would You Rather?</h4>
                    <p>
                        {question.optionOne.text}
                        <br />
                        or ...
                    </p>
                    <Link to={`/questions/${question.id}`}>
                        <Button
                            onClick={this.handleClick}
                            variant="primary">
                            View
                        </Button>

                    </Link>
                </Card>
            </div>
        )
    }
}

export default QuestionShortCut
