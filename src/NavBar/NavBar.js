import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar()
{
	return (
		<>
			<nav className='navbar box background-white'>
				<div className='container-fluid'>
					<Navbar.Brand as={Link} to="/" >Photo Showcase</Navbar.Brand>
					<Navbar.Brand as={Link} to="/gallery" >Gallery</Navbar.Brand>
					<NavDropdown title="More Options" id="navbar-nav-dropdown">
						<NavDropdown.Item id='navbar-nav-dropdown-item' as={Link} to="/" >Home/Featured</NavDropdown.Item>
						<NavDropdown.Divider id='navbar-nav-dropdown-item'/>
						<NavDropdown.Item id='navbar-nav-dropdown-item' as={Link} to="/upload">Upload</NavDropdown.Item>
						<NavDropdown.Divider id='navbar-nav-dropdown-item'/>
						<NavDropdown.Item id='navbar-nav-dropdown-item' as={Link} to="/download">Download</NavDropdown.Item>
						<NavDropdown.Divider id='navbar-nav-dropdown-item'/>
						<NavDropdown.Item id='navbar-nav-dropdown-item' as={Link} to="/about-us">About Us</NavDropdown.Item>
					</NavDropdown>
				</div>
			</nav>
		</>
	);
}

export default NavBar;