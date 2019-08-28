import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import '../styles/App.css'

const Header = () => {
  let [openState, setOpenState] = useState(false)

  return (
    <Navbar dark expand='md' className='App-header'>
      <NavbarBrand href='/'>
        <img
          className='App-logo'
          src={require('../assets/PS_LOGO001.png')}
          alt='no content...'></img>
      </NavbarBrand>
      <NavbarToggler onClick={() => setOpenState(!openState)} />
      <Collapse isOpen={openState} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem className='navitemactive'>
            <NavLink href='/home/'>HOME</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink href='/home/'>SIGN IN</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink href='/home/'>CONTACT US</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
export default Header
