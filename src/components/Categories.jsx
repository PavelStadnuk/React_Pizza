import React from 'react'
const Categories = React.memo(({ activeCategory, onClickCategory }) => {
	const categoris = [
		'Все',
		' Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<div className='categories'>
			<ul>
				{categoris.map((value, index) => {
					return (
						<li
							key={index}
							onClick={() => {
								onClickCategory(index)
							}}
							className={activeCategory === index ? 'active' : ''}
						>
							{value}
						</li>
					)
				})}
			</ul>
		</div>
	)
})
export default Categories
