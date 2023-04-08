import React from 'react'
import Button from '../utils/components/Button/Button'

const Buttons = (props) => {
	const { setVisible } = props
	return (
		<div className='buttons'>
			<Button label={'Nuestra carta'} click={() => setVisible('menu')} />
			<Button label={'El Bodegón'} click={() => setVisible('bodegon')} />
			<Button label={'Llámanos'} click={() => setVisible('call')} />
		</div>
	)
}

export default Buttons
