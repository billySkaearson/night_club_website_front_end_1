import React from 'react';
import './../styles/homeScreen.css'
import Helmet from 'react-helmet'
import PhotoSlide from './../comps/photoSlide'
import {useNavigate} from 'react-router-dom'


const HomeScreen = () =>{
	const navigate = useNavigate();
	return(
		<section className='homeScreen'>
<Helmet>
	<title>home page</title>
	<meta name='description' content='meet your soulmate now !!' />
	<meta name='keywords' content='dating,club,meet' />
	 <link rel="canonical" href="https://wclubber.enveraworld.com/" />
</Helmet>
		<h1>Get frind now</h1>
		<PhotoSlide />
		<button onClick={()=>navigate('/opration')}>Start</button>
		</section>
		)
}

export default HomeScreen;