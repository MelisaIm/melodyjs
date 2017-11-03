import React from 'react';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import logoutProcess from '../../redux/thunks/logoutProcess';

export default function IndexPage(props) {
	function handleLogout() {
		localStorage.removeItem('token');
		// logoutProcess(props.history);
	}
	return (
		<div className="IndexPage">
			<NavBar loggedUser={localStorage.getItem('token') ? true : false} />
			<div className="IndexPageContent">
				<div className="jumbotron">
					<div className="container">
						<h1>
							<span className="jumbotron-text">Welcome to MelodyJS!</span>
						</h1>
						<p>
							<span className="jumbotron-text">MelodyJS is a visual music canvas</span>
						</p>
						<p>
							{localStorage.getItem('token')
								? <Button type="submit" onClick={handleLogout}>
										{' '}Log Out{' '}
									</Button>
								: <LinkContainer to="/studio" exact>
										<a className="btn btn-primary btn-lg" href="/studio" role="button">
											Let's Create
										</a>
									</LinkContainer>}
						</p>
						<div className="photoCredit">
							<span className="jumbotron-text">Photo by Haley Powers on Unsplash</span>
						</div>
					</div>
				</div>
			</div>
			<Footer activeKey={1} />
		</div>
	);
}
