import React from 'react'
import styles from './search.module.scss'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../Redux/Slices/FilterSlice.js'
export const SearchPizza = () => {
	const dispatch = useDispatch()
	const [value, setValue] = React.useState('')
	const inputRef = React.useRef()
	const onClickClear = () => {
		dispatch(setSearchValue(''))
		setValue('')
		inputRef.current.focus()
	}
	const updateSearchValue = React.useCallback(
		debounce(str => {
			dispatch(setSearchValue(str))
		}, 750),
		[]
	)
	const onChangeInput = event => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={styles.root}>
			<svg
				className={styles.icon}
				xmlns='http://www.w3.org/2000/svg'
				data-name='Layer 2'
				id='Layer_2'
			>
				<path d='M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z' />
			</svg>
			<input
				onClick={onClickClear}
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				placeholder='Поиск пицы'
			/>
			{value && (
				<svg
					onClick={() => setSearchValue('')}
					className={styles.closeIcon}
					xmlns='http://www.w3.org/2000/svg'
					data-name='Layer 2'
					id='Layer_2'
				>
					<path d='M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z' />
					<path d='M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z' />
				</svg>
			)}
		</div>
	)
}
