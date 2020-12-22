import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import image_logo from '../image_logo.png';
import './Navbar.css';
import {Button} from './Button';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = ()=> {
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'><i className="navbar-brand mr-auto" href="#"><img src={image_logo} width="60" height="60" /></i></Link>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            AIU 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/pictures' className='nav-links' onClick={closeMobileMenu}>
                                Pictures
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                                Contacts
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/bighit' className='nav-links' onClick={closeMobileMenu}>
                                BigHit
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                AIU
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>AIU</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar