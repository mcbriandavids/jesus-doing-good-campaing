import React from 'react';
import Title from './Title';
import { Row, Col, Container, Card } from 'react-bootstrap';

const Join = () => {
	return (
		<Container>
			<Title title='join our team' />
			<Row>
				<Col>
					<Card className='mb-5 w-75 mx-auto'>
						<Card.Body>
							<p className='mx-4 text-center'>
								We invite you to be a part of our soul winning team.
								<br />
								Please send us your full names, email and phone numbers and other details in the form
								below
							</p>
							<h3 className='text-center '>Join Us</h3>
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
						<p className=' text-center mx-4'>
							{' '}
							We shall always notify you on our next crusade and help you find your way to any venue.
							<br />
							We can make good use of your used clothes, shoes, bags etc
							<br />
							Do well to contact us should you have used clothes to give away.
						</p>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Join;
