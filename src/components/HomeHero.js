import React from 'react';

const HomeHero = ({ children, hero }) => {
	return <header className={hero}>{children}</header>;
};
HomeHero.defaultProps = {
	hero: 'defaultHome'
};
export default HomeHero;
