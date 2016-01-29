import React from 'react'
import { Router, Route, Link } from 'react-router'

import Firebase from 'firebase'

const Login = React.createClass({
	handleEmail : function(e){
		this.setState({email : e.target.value})
	},
	handlePassword : function(e){
		this.setState({password : e.target.value})
	},
	getInitialState : function(){
		return {
			email : '',
			password : '',
			error : ''
		}
	},
	handleSubmit : function(e){
		e.preventDefault()		
		this.firebaseRef = new Firebase("https://stack69.firebaseio.com/")
		this.firebaseRef.authWithPassword({
		  email    : this.state.email,
		  password : this.state.password
		}, function(error, authData){
			if(error){
				console.log(error)
			}
			else{
				console.log(authData)
			}
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						placeholder="email" 
						value={this.state.email}
						onChange={this.handleEmail}
					/>
					<input 
						type="password" 
						placeholder="password" 
						value={this.state.password}
						onChange={this.handlePassword}
					/>
					<button type="submit">Login</button>	
				</form>
				{this.state.error}
			</div>
		);
	}
});

module.exports = Login;