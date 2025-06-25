import React from 'react'
import './../styles/header.css'
import Logo from '../img/logo.png'
import Userpf from '../img/userpf.jpg'
import {useLocation} from 'react-router-dom';


import {NavLink,useNavigate} from 'react-router-dom'

const Header = () =>{
	const {pathname} = useLocation();
	const navigate = useNavigate();
	console.log(pathname)
	return(
		<header className={pathname!=='/auth'? 'header':'displayNone'}>

		<img className='logo' src={Logo} alt="logo" onClick={()=> navigate('/') } />
		<ul>
<li><div className='profileFrame'><NavLink aria-label="profile" to='/profile'><img src={Userpf} alt='user profile photo' /></NavLink></div></li>
		</ul>
	</header>)
}

export default Header;