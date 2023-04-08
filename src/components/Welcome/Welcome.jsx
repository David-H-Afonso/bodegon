import React from 'react'
import { useTranslation } from 'react-i18next'

const Welcome = (props) => {
	const { t } = useTranslation('general')
	return (
		<>
			<h1>{t('home.welcome')}</h1>
			<div className='bodegonContainer'>
				<img src={require('../../assets/bodegon-1.jpg')} alt='bodegon-1' />
				<img src={require('../../assets/bodegon-2.jpg')} alt='bodegon-2' />
			</div>
		</>
	)
}

export default Welcome
