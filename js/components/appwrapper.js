import React from 'react'
import { Router, Route, Link } from 'react-router'

const AppWrapper = React.createClass({
	render: function() {
		return (
			<div>
		  	{this.props.children}
		    <nav>
		     	<Link to="/app/explore">Explore </Link>
		     	<Link to="/app/stack">Stack </Link>
		     	<Link to="/app/notification">Notification </Link>
		     	<Link to="/app/profile">Profile</Link>
		    </nav>
		  </div>
		);
	}

});

module.exports = AppWrapper;