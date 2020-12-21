import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
	state = {
		isOpen: false
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<nav className='navbar'>
				<div className='nav-center'>
					<div className='nav-header'>
						<Link to='/'>
							<img src={logo} alt='Jesus Doing Good Campaign' />
						</Link>
						<button className='nav-btn' type='button' onClick={this.handleToggle}>
							<FaAlignRight className='nav-icon' />
						</button>
					</div>
					<ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
						<li>
							<Link to='/'>Home</Link>
							<Link to='/about'>about us</Link>
							<Link to='/contact'>contact</Link>
							<Link to='/crusades'>crusades</Link>
							<Link to='/join' className='link-one'>
								join us
							</Link>
							<Link to='/support' className='link-two'>
								support
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
