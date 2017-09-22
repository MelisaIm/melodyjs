import React from 'react';
import NavBar from '../NavBar/NavBarComponent';
import Footer from '../NavBar/FooterComponent';
import { LinkContainer } from 'react-router-bootstrap';

export default function IndexPage() {
	return (
		<div className="IndexPage">
			<NavBar />
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
							<LinkContainer to="/studio" exact>
								<a className="btn btn-primary btn-lg" href="/studio" role="button">
									Let's Create
								</a>
							</LinkContainer>
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
