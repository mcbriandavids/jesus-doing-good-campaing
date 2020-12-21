import React from 'react';
import Crusade from './Crusade';

const CrusadeList = ({ crusades }) => {
	if (crusades.length === 0) {
		<div className='empty-search'>
			<h3>unfortunately no crusades matched your search parameter</h3>
		</div>;
	}
	return (
		<>
			<section className='crusadesList'>
				<div className='crusadesList-center'>
					{crusades.map((item) => {
						return <Crusade key={item.id} crusade={item} />;
					})}
				</div>
			</section>
		</>
	);
};

export default CrusadeList;
