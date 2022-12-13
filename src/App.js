
import {BrowserRouter, Route , Routes,Link} from "react-router-dom"

import './App.css'
import Giphy from "./giphy"

import Child from "./iphone"
import Weather from "./weather"



function App() {

	return(

		<div>
		<BrowserRouter>
		
<ul className="flex list-none p-4 ">
	
	<li className="p-4"><Link to='/child'>Gallery</Link></li>
	<li className="p-4"><Link to='/weather'>Weather</Link></li>
	<li className="p-4"><Link to='/giphy'>Giphy</Link></li>


</ul>


		<Routes>
			
			<Route path='/child' element={<Child />}></Route>
			<Route path='/weather' element={<Weather />}></Route>

			<Route path='/giphy' element={<Giphy />}></Route>
		</Routes>
		
		
		</BrowserRouter>
		
		</div>
		

		
	)
	

	

	
}

export default App






