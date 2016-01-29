import React from 'react'
import { Router, Route, Link } from 'react-router'

import Card from "./card"

var Stack = React.createClass({

	render: function() {
		return (
			<Card name={"Meong"} job={"Web Developer"}/>
		);
	}

});

module.exports = Stack;