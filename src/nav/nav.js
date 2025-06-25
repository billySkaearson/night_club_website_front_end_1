import React from 'react'
import Header from './../comps/header'
// screens
import HomeScreen from './../screens/HomeScreen'
import Profile from './../screens/profile'
import Opration from './../screens/opration'
import Auth from './../screens/auth'

import {Route,BrowserRouter,Routes} from 'react-router-dom'

const Navigator = () =>{
	return(<BrowserRouter>
		<Header />
		<Routes>
			<Route path='/' exact element={<HomeScreen />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/opration' element={<Opration />} />
			<Route path='/auth' element={<Auth />} />
		</Routes>
	</BrowserRouter>)
}
export default Navigator;