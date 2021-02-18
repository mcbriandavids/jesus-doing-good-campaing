import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import PropTypes from 'prop-types';
import '../styles/crusade.css';

const Crusade = ({ crusade }) => {
	const { name, slug, images } = crusade;
	return (
		<Card className='crusade'>
			<Card.Body>
				<div className='img-container thumbnail'>
					<Card.Img src={images[0] || defaultImg} alt={'images'} />
					<Link to={`/crusades/${slug}`} className='btn-primary crusade-link text-decoration-none'>
						view details
					</Link>
				</div>
				<Card.Title>
					<p className='crusade-info'>{name}</p>
				</Card.Title>
			</Card.Body>
		</Card>
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
