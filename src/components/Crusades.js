import React from 'react';
import HomeHero from './HomeHero';
import Banner from './Banner';
import CrusadeContainer from './CrusadeContainer';
import { Link } from 'react-router-dom';

const Crusades = () => {
	return (
		<>
			<HomeHero hero='crusadesHome'>
				<Banner title='our crusades'>
					<Link to='/' className='btn-primary'>
						return home
					</Link>
				</Banner>
			</HomeHero>
			<CrusadeContainer />
		</>
	);
};

export default Crusades;
