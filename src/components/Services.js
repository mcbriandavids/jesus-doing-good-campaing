import React, { Component } from 'react';
import { FaAirFreshener, FaShuttleVan, FaEye } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaEye />,
				title: 'Our Vision',
				info: ' to.. harvest souls into Christ Kingdom through preaching of the true gospel of salvation'
			},

			{
				icon: <FaShuttleVan />,
				title: 'Our Mission',
				info: ' Going about doing good from place to place by advertizing Jesus to all men. Acts 10:38'
			},
			{
				icon: <FaAirFreshener />,
				title: 'Features',
				info: ' Church Plantings, Empowerment, Pastoral Conference '
			}
		]
	};
	render() {
		return (
			<section className='services'>
				<Title title='Features' />
				<div className='services-center'>
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
