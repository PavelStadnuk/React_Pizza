import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../Utilites/calckTotalPrice'
import { getCartLS } from '../../Utilites/getCartLockalStorage'
const carData = getCartLS()
const initialState = {
	totalPrice: carData.totalPrice,
	items: carData.items,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				findItem.count--
			}
			state.items = state.items.filter(obj => obj.count !== 0)
		},
		addProduct(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({ ...action.payload, count: 1 })
			}
			state.totalPrice = calcTotalPrice(state.items)
		},
		removeProduct(state, action) {
			state.items = state.items.filter(obj => obj.id === action.payload.id)
		},
		clearProduct(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})
export const selectCard = state => state.cart
export const { addProduct, removeProduct, clearProduct, minusItem } =
	cartSlice.actions

export default cartSlice.reducer
