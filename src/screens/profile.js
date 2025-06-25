import React from 'react'
import '../styles/profile.css'

const Profile = () =>{
	const history = [1,1,2,2,2,2]
	return(<section className="profilePage">
		<div className='infoBox'>
			<img src='' alt='user photo' />
			
		</div>
		<div className='userDetails'>
			<h1>User Name</h1>
			<p>job</p>
			<p>height</p>
		   <hr/>
            <h2>interestes</h2>
            <p className='interest'>swiming</p>
             <p className='interest'>swiming</p>
              <p className='interest'>swiming</p>
             <hr/>
             <h2>about me</h2>
             <p>holy moly what the heck man holy moly what the heck manholy moly what the heck man
             holy moly what the heck manholy moly what the heck manholy moly what the heck man</p>
             <hr/>
             <h2>history</h2>
             {history.map((item,index)=>{ return(
             <div className='windowHistory'><img /> <p>name</p><p>12344</p></div>
            )})}
		</div>
		<div className='history'>
			<div className='window'></div>
		</div>
	</section>)
}

export default Profile;