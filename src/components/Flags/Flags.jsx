import React from 'react'

const Flags = (props) => {
	const { changeLang } = props
	return (
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
	)
}

export default Flags
