import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/logo.svg';
import '../styles/navbar.css';

const NavBar = () => {
	return (
		<>
			<Navbar bg='light' variant='light' expand='lg' collapseOnSelect className='text-capitalize'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image src={logo} alt={'image'} className='w-100 h-100' />
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className=' ml-auto '>
							<LinkContainer to='/'>
								<Nav.Link className='text-center mr-4'>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link className='text-center mr-4'>About Us</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/crusades'>
								<Nav.Link className='text-center mr-4'>Crusades</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact'>
								<Nav.Link className='text-center mr-4'>Contact</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/join'>
								<Nav.Link className=' mr-2  text-center  '>Join</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/support'>
								<Nav.Link className=' mr-2  text-center   '>Support</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
