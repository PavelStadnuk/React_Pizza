import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './Slices/FilterSlice.js'
import cart from './Slices/cartSlice.js'
import pizzas from './Slices/PizzasSlice.js'
export const store = configureStore({
	reducer: { filterSlice, cart, pizzas },
})
