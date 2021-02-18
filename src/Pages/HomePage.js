import React from 'react';
import HomeHero from '../components/HomeHero';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<HomeHero>
				<Banner
					title='Jesus Doing Good Campaign'
					subtitle='manifesting Acts 10:38 in villages, towns and cities all over Africa...'>
					<Link to='/crusades' className='btn-primary text-decoration-none'>
						browse crusades
					</Link>
				</Banner>
			</HomeHero>
			<Features />
			<Services />
		</>
	);
};

export default HomePage;
