import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import {
    Container,
    Row,
    Tabs,
    Tab
} from 'react-bootstrap'
class Home extends Component {

    render() {
        const { answered, unanswered } = this.props
        return (
            <div className="all-questions">
                <Container className="text-center">
                    <Row className="justify-content-md-center">

                        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3 justify-content-center">

                            <Tab eventKey="unanswered" title="Unanswered">

                                    <div className="ques-list">
                                        {unanswered.map(question => (
                                            <QuestionCard
                                                questionId={question.id}
                                                key={question.id} />
                                        ))}
                                    </div>

                            </Tab>

                            <Tab eventKey="answered" title="Answered">

                                    <div className="ques-list">
                                        {answered.map(question => (
                                            <QuestionCard
                                                questionId={question.id}
                                                key={question.id} />
                                        ))}
                                    </div>

                            </Tab>

                        </Tabs>

                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const ques = Object.values(questions)
    const answeredIds = Object.keys(users[authedUser].answers)
    const answered = ques.filter(q => answeredIds.includes(q.id))
        .sort((a, b) => b.timestamp - a.timestamp)
    const unanswered = ques.filter(q => !answeredIds.includes(q.id))
        .sort((a, b) => b.timestamp - a.timestamp)


    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Home)