import React from 'react'
import styles from './NotFoundBlock.module.scss'
const ErrorPageNotFound = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<p className={styles.description}>
				К сожелинию даная страница отсуствует на нашем интернет магазине{' '}
			</p>
		</div>
	)
}
export default ErrorPageNotFound
