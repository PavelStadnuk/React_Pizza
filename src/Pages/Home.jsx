import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Pizza from '../components/Pizza/Pizza'
import PizzaSkeleton from '../components/Pizza/PlaceHolder'
import Pagination from '../components/Pagination/index.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory, setPageCount } from '../Redux/Slices/FilterSlice'
import { fetchPizzas } from '../Redux/Slices/PizzasSlice'

const HomePage = () => {
	const dispatch = useDispatch()
	const activeCategory = useSelector(state => state.filterSlice.activeCategory)
	const { items, status } = useSelector(state => state.pizzas)
	const activeCategoryMenu = useSelector(state => state.filterSlice.sortFilter)
	const currentPage = useSelector(state => state.filterSlice.pageCount)
	const searchValue = useSelector(state => state.filterSlice.searchValue)
	const onChangePage = number => {
		dispatch(setPageCount(number))
	}
	const pizzas = items.map((value, index) => {
		return <Pizza key={index} {...value} />
	})
	const skeleton = [...new Array(6)].map((_, index) => {
		return <PizzaSkeleton key={index} />
	})
	const OnChangeCategory = React.useCallback(id => {
		dispatch(setActiveCategory(id))
	}, [])
	const search = searchValue ? `search=${searchValue}` : ''

	React.useEffect(() => {
		const fetchPizza = async () => {
			dispatch(
				fetchPizzas({
					currentPage,
					activeCategory,
					search,
					activeCategoryMenu,
				})
			)
			window.scrollTo(0, 0)
		}
		fetchPizza()
	}, [activeCategory, activeCategoryMenu, searchValue, currentPage])
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={activeCategory}
					onClickCategory={OnChangeCategory}
				/>
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>Произошла ошибка😕</h2>
					<p>К сожелинию не удалось получить питсы</p>
				</div>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeleton : pizzas}
				</div>
			)}
			<Pagination value={currentPage} onChangePage={onChangePage} />
		</div>
	)
}
export default HomePage
