import React,{useState} from 'react'
import '../styles/auth.css'
import Logo from './../img/logo.png'
import PhotoSlide from'../comps/photoSlide'

const Auth = props =>{
	const[isSingin,Setsingin] = useState(false);
	return(
<section className='authPage'>
<PhotoSlide />
	<img className='authPhoto' src={Logo} alt="logo" />
	<input placeholder='enter your email'/>
	<input placeholder='enter your password'/>
	{isSingin && <input placeholder='enter your name'/> }

	<button className='authButton' onClick={() => isSingin? console.log('sing_in'):console.log('login')}>{isSingin ? 'Sing in': 'log in' }</button>
	
</section>
		)
}

export default Auth;