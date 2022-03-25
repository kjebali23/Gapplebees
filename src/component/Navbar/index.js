import React,{useState} from 'react'
import { Nav , NavLink , Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = () => {
    const [showLinks , setShowLinks] = useState(true);
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1 style={{color:'rgb(69,101,226)'}}>Gapplebees</h1>
                </NavLink>
                <Bars />
                <NavMenu className='nav-links' id={showLinks ? "hidden" : ""}>
                    <NavLink to="/login" activeStyle > Login </NavLink>
                    <NavLink to="/sign-up" activeStyle > Sign Up </NavLink>
                    <NavLink to="/race" activeStyle > Race </NavLink>

                </NavMenu>
                
            </Nav>
        </>
    )
}

export default Navbar
