import React, { Component } from 'react';
import items from './data';

const CrusadeContext = React.createContext();

class ContextProvider extends Component {
	state = {
		crusades: [],
		featuredCrusades: [],
		sortedCrusades: [],
		loading: true
	};
	componentDidMount() {
		let crusades = this.formatData(items);
		let featuredCrusades = crusades.filter((crusade) => crusade.featured === true);
		this.setState({
			crusades: crusades,
			featuredCrusades: featuredCrusades,
			sortedCrusades: crusades,
			loading: false
		});
	}
	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let crusade = { ...item.fields, images, id };
			return crusade;
		});
		return tempItems;
	}
	// Single Crusade
	getCrusade = (slug) => {
		let tempCrusade = [...this.state.crusades];
		const crusade = tempCrusade.find((crusade) => crusade.slug === slug);
		return crusade;
	};
	render() {
		return (
			<CrusadeContext.Provider value={{ ...this.state, getCrusade: this.getCrusade }}>
				{this.props.children}
			</CrusadeContext.Provider>
		);
	}
}
const CrusadeConsumer = CrusadeContext.Consumer;

export { CrusadeContext, CrusadeConsumer, ContextProvider };
