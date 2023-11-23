import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	activeCategory: 0,
	pageCount: 1,
	sortFilter: { name: 'популярности', sort: 'rating' },
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setActiveCategory(state, action) {
			state.activeCategory = action.payload
		},
		setActiveCategoryMenu(state, action) {
			state.sortFilter = action.payload
		},
		setPageCount(state, action) {
			state.pageCount = action.payload
		},
		setFilters(state, action) {
			state.pageCount = Number(action.payload.pageCount)
			state.sortFilter = action.payload.sortFilter
			state.activeCategory = Number(action.payload.activeCategory)
		},
	},
})

export const {
	setActiveCategory,
	setActiveCategoryMenu,
	setPageCount,
	setFilters,
	setSearchValue,
} = filterSlice.actions

export default filterSlice.reducer
