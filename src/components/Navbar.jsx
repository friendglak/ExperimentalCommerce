import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShopping } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import { auth } from '../firebase/utils';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinks2
} from '../style/NavbarStyles';

const Navbar = (props) => {
    const { currentUser } = props;
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
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            EXPERIMENTAL
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        {currentUser && (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks to='/car' onClick={closeMobileMenu}>
                                        <AiOutlineShopping />
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks2 onClick={() => auth.signOut()}>
                                        CERRAR SESIÓN
                                    </NavLinks2>
                                </NavItem>
                            </NavMenu>
                        )}
                        {!currentUser && (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks to='/car' onClick={closeMobileMenu}>
                                        <AiOutlineShopping />
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='/register' onClick={closeMobileMenu}>
                                        REGISTRARSE
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='/login' onClick={closeMobileMenu}>
                                        INICIAR SESIÓN
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>
                        )}

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

Navbar.defaultProps = {
    currentUser: null
}  
  export default Navbar;