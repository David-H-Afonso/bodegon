import './App.css'
import React, { useState } from 'react'
import i18next from 'i18next'
import WhereAreWe from '../WhereAreWe/WhereAreWe'
import Welcome from '../Welcome/Welcome'
import Flags from '../Flags/Flags'
import Banner from '../Banner/Banner'
import Buttons from '../Buttons/Buttons'
import Menu from '../Menu/Menu'
import Bodegon from '../Bodegon/Bodegon'

function Home() {
	const [menu, setMenu] = useState(false)
	const [bodegon, setBodegon] = useState(false)

	const changeLang = (lang) => {
		i18next.changeLanguage(lang)
	}

	const setVisible = (buttonPressed) => {
		if (buttonPressed === 'menu') {
			setMenu(true)
			setBodegon(false)
		}
		if (buttonPressed === 'bodegon') {
			setMenu(false)
			setBodegon(true)
		}
		if (buttonPressed === 'call') {
			setMenu(false)
			setBodegon(false)
			window.open('tel:+34648672721')
		}
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<Flags changeLang={changeLang} />
				<Welcome />
				<WhereAreWe />
				<Banner />
				<Buttons setVisible={setVisible} />
				{menu && <Menu />}
				{bodegon && <Bodegon />}
			</header>
		</div>
	)
}

export default Home
