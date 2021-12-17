import React from 'react'
import { connect } from 'react-redux'
import QuestionShortCut from './QuestionShortCut'
import {
    Card
} from 'react-bootstrap'

function QuestionCard(props) {
    const { author, question } = props

    return (
        <div className="user-card">
            <Card className="my-4 card-box">
                <Card.Header as="h5">{author.name} Question</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <img
                            className="card-avatar"
                            alt=""
                            src={author.avatarURL}
                        />
                    </Card.Title>
                    <QuestionShortCut
                        question={question}
                    />
                </Card.Body>


            </Card>
        </div>
    )
}

function mapStateToProps({ users, questions }, { questionId }) {
    const question = questions[questionId]

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
}

export default connect(mapStateToProps)(QuestionCard)