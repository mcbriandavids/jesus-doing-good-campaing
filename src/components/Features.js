import React, { Component } from 'react';
import Title from './Title';
import Crusade from './Crusade';
import Loading from './Loading';
import { CrusadeContext } from '../Context';
export default class Features extends Component {
	static contextType = CrusadeContext;
	render() {
		let value = this.context;
		const { featuredCrusades: crusades, loading } = value;

		return (
			<div className='orange-container'>
				<section className='featured-crusades'>
					<Title title='recent crusades' />
					<div className='featured-crusades-center'>
						{loading ? (
							<Loading />
						) : (
							crusades.map((crusade) => {
								return <Crusade key={crusade.id} crusade={crusade} />;
							})
						)}
					</div>
				</section>
			</div>
		);
	}
}
