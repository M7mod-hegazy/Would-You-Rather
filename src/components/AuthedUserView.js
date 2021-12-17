import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Home from './Home'
import Navigation from './Navigation'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuestionView from './QuestionView'

class AuthedUserView extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Fragment>
                        <Navigation />
                        <Container style={{ width: "35%" }}>
                            <Switch>
                                <Route exact path='/' component={Home} />              
                                <Route path="/questions/:question_id" component={QuestionView} />
                                <Route path='/add' component={AddQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                            </Switch>
                        </Container>
                    </Fragment>
                </Router>
            </div>
        )
    }
}

export default AuthedUserView