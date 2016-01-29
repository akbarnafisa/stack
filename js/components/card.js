import React from 'react'
import { Router, Route, Link } from 'react-router'

var Card = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.name}
				{this.props.job}
			</div>
		);
	}

});

module.exports = Card;