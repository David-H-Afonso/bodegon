import React from 'react'

const Button = (props) => {
	const { label, click } = props
	return (
		<div className='button' onClick={click}>
			<p>{label}</p>
		</div>
	)
}

export default Button
