import React from 'react'
import { Router, Route, Link } from 'react-router'

import Firebase from 'firebase'

const Register = React.createClass({
	handleEmail : function(e){
		this.setState({email : e.target.value})
	},
	handlePassword : function(e){
		this.setState({password : e.target.value})
	},
	getInitialState : function(){
		return {
			password : '',
			email : ''
		}
	},
	handleSubmit : function(e){
		let self = this
		e.preventDefault()
		this.firebaseRef = new Firebase("https://stack69.firebaseio.com/")
		this.firebaseRef.createUser({
		  email    : this.state.email,
		  password : this.state.password
		}, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    self.firebaseRef.authWithPassword({
				  email    : self.state.email,
				  password : self.state.password
				}, function(error, authData){
					if(error){
						console.log(error)
					}
					else{
						console.log(authData)
					}
				}.bind(self));
		  }
		});
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 	
						type="email" 
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
					<button type="submit">Register</button>	
				</form>
			</div>
		);
	}
});

module.exports = Register;