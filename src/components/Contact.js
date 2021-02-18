import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Title from './Title';
import { contactInfo } from '../data';
import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaHome } from 'react-icons/fa';
const Contact = () => {
	console.log(contactInfo);
	return (
		<Container>
			<Title title='Contact us' />
			<Row>
				<Col md={5}>
					<Card className='mb-5'>
						<p className='mx-4 text-center'>We invite you to be a part of our soul winning team.</p>

						<Card.Body>
							<h3 className='text-center '>Join Our Team</h3>
							<form
								name='contact'
								method='post'
								action='/success'
								data-netlify='true'
								onSubmit='submit'
								data-netlify-honeypot='bot-field'>
								<input type='hidden' name='form-name' value='contact' />
								<div className='mt-2'>
									<label htmlFor='FullName'>First Name</label>
									<input
										required
										type='text'
										placeholder='Full Name'
										name='FullName'
										className='w-100 py-2'
									/>
								</div>
								<div className='mt-2'>
									{' '}
									<label htmlFor='Email'>Email</label>
									<input
										required
										type='email '
										placeholder='Email'
										name='Email'
										className='w-100 py-2'
									/>
								</div>
								<div className='mt-2'>
									<label htmlFor='PhoneNumber'>Phone Number</label>
									<input
										required
										type='number'
										placeholder='Phone Number'
										name='PhoneNumber'
										className='w-100 py-2'
									/>
								</div>
								<div className='mt-2'>
									<label htmlFor='Message'>Message</label>
									<textarea
										required
										placeholder='Message'
										name='Message'
										className='w-100 py-2'></textarea>
								</div>
								<button type='submit' className=' btn-primary text-dark text-uppercase w-100 '>
									Submit
								</button>
							</form>
						</Card.Body>
					</Card>
				</Col>
				<Col md={7}>
					{contactInfo.contact.map((info, index) => (
						<Card key={index} className='p-4'>
							<Card.Body>
								<Card.Title>
									<p>
										<strong>Office Address</strong>:{info.name}
									</p>
								</Card.Title>
								<p>
									<FaPhone />: {info.phone}
								</p>
								<p>
									<FaHome />: {info.Email}
								</p>
								<h4>
									<strong className='mr-2'>We are social</strong>:
									<Link to='#' className='text-decoration-none'>
										{' '}
										<FaInstagram className='ml-2 mr-2 icon' />
									</Link>{' '}
									<Link to='#' className='text-decoration-none'>
										{' '}
										<FaTwitter className='ml-2 mr-2 icon' />
									</Link>{' '}
									<Link to='#' className='text-decoration-none'>
										<FaFacebook className='ml-2 mr-2 icon' />
									</Link>
								</h4>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
// <div className='contact-text'>
// 			<br />
// 			<p>Telephone:+2348067178171</p>
// 			<p> Email:jesusdoinggoodcampaign @gmail.com</p>

// 			<p>You can also reach on any of our social media platform:</p>

// 			<ul className='social-links'>
// 				<li>
// 					<strong>Instagram:</strong>{' '}
// 				</li>
// 				<li>
// 					<strong>facebook:</strong>
// 				</li>
// 				<li>
// 					<strong>twitter:</strong>
// 				</li>
// 				<li>
// 					<strong>whatsappp:</strong>
// 				</li>
// 			</ul>
// 		</div>
// 		<br />
