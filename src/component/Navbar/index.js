import React from 'react'
import { Nav , NavLink , Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1 style={{color:'rgb(69,101,226)'}}>Gapplebees</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle > About </NavLink>
                    <NavLink to="/features" activeStyle > Features </NavLink>
                    <NavLink to="/contact-us" activeStyle > Contact Us </NavLink>
                    <NavLink to="/sign-up" activeStyle > Sign Up </NavLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="sign-in">Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar
