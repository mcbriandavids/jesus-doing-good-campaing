import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Title from './Title';

export default class Support extends Component {
	state = {
		supports: [
			{
				name: 'Jesus Doing Good Campaign',
				bank: 'United Bank for Africa',
				number: 2123070104
			}
		]
	};
	render() {
		return (
			<div className='support'>
				<Title title='support us' />
				<div className=' text-center'>
					<p className='mx-4'>
						{' '}
						Jesus Doing Good Campaign is made possible by generous contributions/donations from friends and
						partners.
					</p>

					<p className='mx-4'>
						{' '}
						You can be a part of what God is doing by contributing financially through the be medium below;
					</p>
				</div>
				{this.state.supports.map((support, index) => {
					const { name, bank, number } = support;
					return (
						<Card key={index} className='support-details'>
							<p>
								Account Name: <strong>{name}</strong>
								<br />
								Bank : <strong> {bank}</strong>
								<br />
								Account Number : <strong> {number}</strong>
							</p>
						</Card>
					);
				})}
			</div>
		);
	}
}
