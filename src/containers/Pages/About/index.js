import React, { Component } from 'react';
import { Container } from 'reactstrap';
// import UserRepos from './containers/UserRepos';
import './style.scss';

class About extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<h2 className="text-center">About</h2>
				</Container>
			</div>
		);
	}
}

export default About;
