import React,{useState} from 'react'
import './../styles/opration.css'

import PhotoSlide from './../comps/photoSlide'

const Opration = () =>{
	const list = ['awef','awefeeee','awe'];
	const [clubName,setClubName] = useState('');
	const [didDone,setDone] = useState(false);

	return(<section className='opration'>
		
		<input className='searchInput' value={clubName} onChange={e=>setClubName(e.target.value)} placeholder=" enter the name of the club" />
			<PhotoSlide />
		<div className='show'>{list.filter(item => item.match(clubName)).map((item,index)=>{return(
      <p onClick={()=> setDone(true)}>{item}</p>

		)})}</div>


{ didDone && <div><div className='shadowdone'></div> <div className='done'>
	<img src="" alt='' />
<h1>name here</h1>
<p>job age</p>
<p>bio</p>
<h2>code here</h2>
<button onClick={()=>setDone(false)}>end</button>
</div></div> }


	</section>)
}
export default Opration;