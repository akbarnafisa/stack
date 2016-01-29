import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, Redirect} from 'react-router'

import Register from './components/register'
import Login from './components/login'
import AppWrapper from './components/appwrapper'
import Stack from './components/stack'
import Explore from './components/explore'
import Notification from './components/notification'
import Profile from './components/profile'

const App = React.createClass({
	firebaseRef : new Firebase("https://stack69.firebaseio.com/"),
	getInitialState : function(){
		return {
			signUp : false,
			loggedIn : null
		}
	},
	componentDidMount : function(){
		this.firebaseRef.onAuth(function (authData) {
			if (authData) {
		  	this.setState({
		  		loggedIn : authData.uid
		  	})
		  } 
		  else {
		  	this.setState({
		  		loggedIn : null
		  	})
		  }
		}.bind(this))
	},
	handleSignupPage : function(){
		this.setState({
			signUp : true
		})
	},
	handleLoginPage : function(){
		this.setState({
			signUp : false
		})
	},
	handleLogOut : function(){
		this.firebaseRef.unauth()
	},
	mainCheck : function(){
		if(this.state.loggedIn){
	      return (
	      	<div>
	      		{this.props.children}
	      		<button onClick={this.handleLogOut}>Log Out</button>
	      	</div>
	      )
		}
		else if(!this.state.signUp){
			return (
				<div>
					<Login/>
					<button onClick={this.handleSignupPage}>Sign Up</button>
				</div>
				)
		}
		else{
			return (
				<div>
					<Register/>
					<button onClick={this.handleLoginPage}>Log In</button>
				</div>
				)
		}
	},
  render() {
    return (
    	<div>
    		{this.mainCheck()}
    	</div>
    )
  }
})

render((
	<Router history={hashHistory} >
		<Route path="/" component={App}>
			<IndexRoute component={AppWrapper}/>
			<Route path="/" component={AppWrapper}>
				<IndexRoute component={Explore}/>
				<Route path="/explore" component={Explore} />
				<Route path="/stack" component={Stack} />
				<Route path="/notification" component={Notification} />
				<Route path="/profile" component={Profile} />
			</Route>
		</Route>
	</Router>
), document.getElementById('app'))