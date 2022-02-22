import React, { Component } from 'react'
import { Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {

    state = { 
        isMobile: window.innerWidth < 768,
    };

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 768});
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className='header'>
                <Navbar variant="dark" fixed="top">
                    <Navbar.Brand href="#home">
                        簡
                    </Navbar.Brand>
                    
                    <Navbar.Collapse className="justify-content-end">
                            <NavDropdown title={<FontAwesomeIcon 
                                                    icon={faUserCircle} 
                                                    size="2x" 
                                                    color="#fff"/>} 
                                    id="nav-dropdown"
                                    align="end"
                                    menuVariant="dark">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        )
    }
}

export default Header
