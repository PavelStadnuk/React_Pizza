import { calcTotalPrice } from './calckTotalPrice'

export const getCartLS = () => {
	const data = localStorage.getItem('cart')
	const items = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(items)
	return { items, totalPrice }
}
