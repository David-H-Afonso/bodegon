import React from 'react'
import { useTranslation } from 'react-i18next'

const Banner = (props) => {
	const { t } = useTranslation('general')

	return (
		<div className='banner'>
			<div>
				<img src={require('../../assets/rating.png')} alt={t('banner.review')} />
				<p>{t('banner.review')}</p>
			</div>
			<div>
				<img src={require('../../assets/low-price.png')} alt={t('banner.cheap')} />
				<p>{t('banner.cheap')}</p>
			</div>
			<div>
				<img src={require('../../assets/canary-islands.png')} alt={t('banner.canary')} />
				<p>{t('banner.canary')}</p>
			</div>
		</div>
	)
}

export default Banner
