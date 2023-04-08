import './App.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function Home() {
	const { t } = useTranslation('general')

	const changeLang = (lang) => {
		i18next.changeLanguage(lang)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='flagContainer'>
					<div onClick={() => changeLang('es')}>
						<img src={require('../../assets/spain.png')} alt='spain' />
					</div>
					<div onClick={() => changeLang('en')}>
						<img src={require('../../assets/united-kingdom.png')} alt='united kingdom' />
					</div>
					<div onClick={() => changeLang('de')}>
						<img src={require('../../assets/germany.png')} alt='german' />
					</div>
				</div>
				<h1>{t('home.welcome')}</h1>
				<div className='bodegonContainer'>
					<img src={require('../../assets/bodegon-1.jpg')} alt='bodegon-1' />
					<img src={require('../../assets/bodegon-2.jpg')} alt='bodegon-2' />
				</div>
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
			</header>
		</div>
	)
}

export default Home
