import React from 'react';
import CrusadeList from './CrusadeList';
import { CrusadeConsumer } from '../Context';
import Loading from './Loading';

const CrusadeContainer = () => {
	return (
		<CrusadeConsumer>
			{(value) => {
				const { sortedCrusades, loading } = value;
				if (loading) {
					<Loading />;
				}
				return <CrusadeList crusades={sortedCrusades} />;
			}}
		</CrusadeConsumer>
	);
};
export default CrusadeContainer;
