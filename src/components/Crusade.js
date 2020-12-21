import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import PropTypes from 'prop-types';

const Crusade = ({ crusade }) => {
	const { name, slug, images } = crusade;
	return (
		<article className='crusade'>
			<div className='img-container'>
				<img src={images[0] || defaultImg} alt={name} />
				<Link to={`/crusades/${slug}`} className='btn-primary crusade-link'>
					view details
				</Link>
			</div>
			<p className='crusade-info'>{name}</p>
		</article>
	);
};

Crusade.propTypes = {
	crusade: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired
	})
};
export default Crusade;
