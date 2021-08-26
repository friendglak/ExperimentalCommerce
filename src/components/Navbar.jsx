import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShopping, IconName } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn,
} from '../style/NavbarStyles';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/inicio" onClick={closeMobileMenu}>
                            EXPERIMENTAL
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/inicio' onClick={closeMobileMenu}>
                                    <AiOutlineShopping />
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/proyects' onClick={closeMobileMenu}>
                                    REGISTRARSE
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/testimonios' onClick={closeMobileMenu}>
                                    INICIAR SESIÓN
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}



export default Navbar;