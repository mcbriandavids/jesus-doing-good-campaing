import React, { Component } from 'react';
import { CrusadeContext } from '../Context';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

export default class SingleCrusadePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		};
	}
	static contextType = CrusadeContext;
	componentDidMount() {}
	render() {
		const { getCrusade } = this.context;
		const crusade = getCrusade(this.state.slug);
		if (!crusade) {
			return (
				<div className='error'>
					<h3>no such crusade could be found</h3>
					<Link to='/crusades' className='btn-primary'>
						back to crusades
					</Link>
				</div>
			);
		}
		const { name, description, images } = crusade;
		return (
			<>
				<StyledHero img={images[0] || this.state.defaultBcg}>
					<Banner title={name}>
						<Link to='/crusades' className='btn-primary'>
							back to crusades
						</Link>
					</Banner>
				</StyledHero>
				<section className='single-crusade'>
					<div className='single-crusade-info'>
						<article className='desc'>
							<h3>details</h3>
							<p>{description}</p>
						</article>
					</div>
					<div className='single-crusade-images'>
						{images.map((item, index) => {
							return <img src={item} alt={name} />;
						})}
					</div>
				</section>
			</>
		);
	}
}
