import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CrusadesPage from './Pages/CrusadesPage';
import ContactPage from './Pages/ContactPage';
import SingleCrusadePage from './Pages/SingleCrusadePage';
import JoinPage from './Pages/JoinPage';
import JoinFormPage from './Pages/JoinFormPage';
import SupportPage from './Pages/SupportPage';
import AboutPage from './Pages/AboutPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<NavBar />
			<main>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/contact' component={ContactPage} />
					<Route exact path='/crusades/:slug' component={SingleCrusadePage} />
					<Route exact path='/crusades' component={CrusadesPage} />
					<Route path='/join' component={JoinPage} />
					<Route path='/join-form' component={JoinFormPage} />
					<Route path='/support' component={SupportPage} />
				</Switch>
			</main>
			<Footer />
		</>
	);
};

export default App;
