import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='container'>
				<span>
					{' '}
					<img src={logo} alt='JDG' /> &copy; 2020{' '}
				</span>
			</div>
		</div>
	);
};

export default Footer;
