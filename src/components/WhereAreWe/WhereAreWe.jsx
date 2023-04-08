import React from 'react'
import { useTranslation } from 'react-i18next'

const WhereAreWe = (props) => {
	const { t } = useTranslation('general')
	return (
		<>
			<h1>{t('home.where')}</h1>
			<div className='map'>
				<iframe
					title='bodegon map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1287463267095!2d-16.553172084591374!3d28.415371800626378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7f9348371b77%3A0x2d5bd6ca8632f582!2sBodeg%C3%B3n%20Puerto%20Cruz!5e0!3m2!1sen!2ses!4v1680918075023!5m2!1sen!2ses'
					width='1200'
					height='450'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</>
	)
}

export default WhereAreWe
