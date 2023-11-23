import './scss/app.scss'
import Header from './components/Header'
import HomePage from './Pages/Home'
import Cart from './components/basket'
import Error404 from './Pages/eror404'
import { Routes, Route } from 'react-router-dom'
function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart.html' element={<Cart />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
