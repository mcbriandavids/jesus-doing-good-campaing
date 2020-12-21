import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

const Join = () => {
	return (
		<div className='join'>
			<Title title='join our team' />
			<div className='join-content'>
				<p>
					We invite you to be a part of our soul winning team.
					<br />
					Please send us your full names, address and phone numbers via the link below
				</p>
				<Link to='/join-form' className='btn-primary join-link'>
					join
				</Link>
				<p>
					{' '}
					We shall always notify you on our next crusade and help you find your way to any venue.
					<br />
					We can make good use of your used clothes, shoes, bags etc
					<br />
					Do well to contact us should you have used clothes to give away.
				</p>
			</div>
		</div>
	);
};

export default Join;
