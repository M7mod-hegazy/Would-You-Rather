import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    Card,
    ProgressBar,
    Badge,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'


class QuestionResult extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/');
    }

    render() {
        const { question, user } = this.props

        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        const userVote = user.answers[question.id]
        const optionOnePercentage = ((optionOneVotes / totalVotes) * 100).toFixed(2)
        const optionTwoPercentage = ((optionTwoVotes / totalVotes) * 100).toFixed(2)

        return (
            <div className="results">
                <Container>
                    <Row>
                        <h4 >Would You Rather?</h4>
                    </Row>
                    <Row>
                        <Col md="12">

                            <Card
                                bg='light'
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Title>{question.optionOne.text}</Card.Title>

                                    {userVote === 'optionOne' && (
                                        <Badge
                                            bg="warning"
                                        >
                                            Your Vote
                                        </Badge>
                                    )}

                                    <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                    <span>{`${optionOneVotes} of ${totalVotes} Votes`}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">

                            <Card
                                bg='light'
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Title>{question.optionTwo.text}</Card.Title>

                                    {userVote === 'optionTwo' && (
                                        <Badge bg="warning">
                                            Your Vote
                                        </Badge>
                                    )}

                                    <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                    <span>{`${optionTwoVotes} of ${totalVotes} Votes`}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Button
                    onClick={this.handleClick}
                    variant="primary">
                    Back
                </Button>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }, { id }) {
    const question = questions[id]
    const user = users[authedUser]
    return {
        user,
        question
    };
}

export default withRouter(connect(mapStateToProps)(QuestionResult))