import React from 'react'
import { Router, Route, Link } from 'react-router'

const AppWrapper = React.createClass({
	render: function() {
		return (
			<div>
		  	{this.props.children}
		    <nav>
		     	<Link to="/explore">Explore </Link>
		     	<Link to="/stack">Stack </Link>
		     	<Link to="/notification">Notification </Link>
		     	<Link to="/profile">Profile</Link>
		    </nav>
		  </div>
		);
	}

});

module.exports = AppWrapper;