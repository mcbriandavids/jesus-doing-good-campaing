import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className=' footer text-center text-capitalize mt-4   '>
				<p className='footer-text'>
					<Link to='/' className='text-decoration-none text-dark'>
						Jesus Doing Good Campaign &copy; 2021
					</Link>
				</p>{' '}
				<small className=' text-secondary text-capitalize'>
					Designed & built: <strong>BrianMartinez Tech</strong>{' '}
				</small>
			</div>
		</div>
	);
};

export default Footer;
