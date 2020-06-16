import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import PollList from './PollList'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'
import IdentifyUser from './IdentifyUser'
import Nav from './Nav'
import PollDetails from './PollDetails'

class Dashboard extends Component { 
  render(){
    const { isLoggedIn } = this.props
    return (
        <Fragment>
        {!isLoggedIn 
            ? <Route path="/" component={LoginForm} /> 
            : <div>
                <IdentifyUser/>          
                <Nav/>
                <div className="dashboard">
                    <div>
                    <Route path='/' exact component={PollList} /> 
                    <Route path='/responses' component={PollList}/>
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/add' component={NewPoll} />
                    <Route path='/questions/:id'  component={PollDetails}/>
                    </div>
                </div>
            </div>
        }
        </Fragment>
        )   
    }
}
    
function mapStateToProps( {authedUser, questions }) {
    return{
      loading: authedUser === null,
      isLoggedIn: authedUser !== null
    }
  }

export default connect(mapStateToProps)(Dashboard);