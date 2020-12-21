import React from 'react';
import HomeHero from '../components/HomeHero';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<HomeHero>
				<Banner
					title='Jesus Doing Good Campaign'
					subtitle='manifesting Acts 10:38 in villages, towns and cities all over Africa...'>
					<Link to='/crusades' className='btn-primary'>
						browse crusades
					</Link>
				</Banner>
			</HomeHero>
			<Features />
			<Services />
		</div>
	);
};

export default HomePage;
