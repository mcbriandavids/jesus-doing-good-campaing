import React, { Component } from 'react';
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
				{this.state.supports.map((support, index) => {
					const { name, bank, number } = support;
					return (
						<article key={index} className='support-content'>
							<p>
								Account Name: <strong>{name}</strong>{' '}
							</p>
							<div>
								{' '}
								<p>
									Bank : <strong> {bank}</strong>
								</p>
							</div>
							<div>
								{' '}
								<p>
									Account Number : <strong> {number}</strong>
								</p>
							</div>
						</article>
					);
				})}
			</div>
		);
	}
}
