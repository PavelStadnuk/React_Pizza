import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzasStatus',
	async ({ currentPage, activeCategory, search, activeCategoryMenu }) => {
		const response = await axios.get(
			`https://63f79d77833c7c9c60881be1.mockapi.io/items?page=${currentPage}&limit=4&${
				activeCategory > 0 ? `category=${activeCategory}` : ''
			}${search}&sortBy=${activeCategoryMenu.sort}&order=desc`
		)
		return response.data
	}
)
const initialState = {
	items: [],
	status: 'loading',
}

export const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: state => {
			state.status = 'loading'
			state.items = []
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload
			state.status = 'success'
		},
		[fetchPizzas.rejected]: (state, action) => {
			state.status = 'error'
			state.items = []
		},
	},
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
