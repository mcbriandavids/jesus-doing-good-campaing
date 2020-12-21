import React from 'react';

const JoinForm = () => {
	return (
		<div>
			<form name='contact' action='/contact' method='post' className='join-form'>
				<input type='hidden' name='form-name' value='contact' />
				<label htmlFor='FirstName'>First Name</label>
				<input type='text' required name='FirstName' placeholder='Your First Name' />
				<label htmlFor='LastName'>Last Name</label>
				<input type='text' required name='LastName' placeholder='Your Last Name' />
				<label htmlFor='Email'>Email</label>
				<input type='text' required name='Email' placeholder='Your Email' />
				<label htmlFor='PhoneNumber'>Phone Number</label>
				<input type='number' required name='Email' placeholder='Your Phone Number' />
				<button type='submit' className='btn-primary submit-btn'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default JoinForm;
