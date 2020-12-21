import React from 'react';
import Title from './Title';
const Contact = () => {
	return (
		<section className='contact-section'>
			<Title title='contact us' />
			<div className='contact-text'>
				<h4>
					{' '}
					Visit our office at Km 124, Benin Auchi Expressway, Beside Julius Berger, Aviele, Edo State, Nigeria
				</h4>
				<br />
				<p>Telephone:+2348067178171</p>
				<p> Email:jesusdoinggoodcampaign @gmail.com</p>

				<p>You can also reach on any of our social media platform:</p>

				<ul className='social-links'>
					<li>
						<strong>Instagram:</strong>{' '}
					</li>
					<li>
						<strong>facebook:</strong>
					</li>
					<li>
						<strong>twitter:</strong>
					</li>
					<li>
						<strong>whatsappp:</strong>
					</li>
				</ul>
			</div>
			<br />
		</section>
	);
};

export default Contact;
