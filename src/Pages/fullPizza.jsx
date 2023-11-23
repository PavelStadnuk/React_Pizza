import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const FullPizza = () => {
	const [pizza, setPizza] = React.useState()
	const { id } = useParams()
	const navigate = useNavigate()
	React.useEffect(() => {
		async function fetch() {
			try {
				const { data } = await axios.get(
					'https://63f79d77833c7c9c60881be1.mockapi.io/items/' + id
				)
				setPizza(data)
			} catch (error) {
				alert('error')
				navigate('/')
			}
		}
		fetch()
	}, [])
	if (!pizza) {
		return '...wait'
	}
	return (
		<div className='container'>
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price}$</h4>
		</div>
	)
}

export default FullPizza
