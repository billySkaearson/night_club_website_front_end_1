import React from 'react'
import './../styles/photoSlide.css'
import Photo1 from '../img/photo1.jpg'
import Photo2 from '../img/photo2.jpg'
import Photo3 from '../img/photo4.jpg'

const PhotoSlide = () =>{
	return(<div className='photoSlide'>

		<img alt='photo1' src={Photo1}/>
		<img alt='photo2' src={Photo2}/>
		<img alt='photo3' src={Photo3}/>

		</div>)
}
export default PhotoSlide;