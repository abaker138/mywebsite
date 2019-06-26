import React from 'react'
import './CodeCard.css'

const CodeCard = ({name, logo}) => {
	return (
			<div className='card'>

				<img className='logo' src={logo}
				alt= '' />

				<a className='link' href="https://github.com/abaker138" target='_blank'>
					<h4 className='cardText'>{name}</h4>
				</a>


			</div>

		)
}

export default CodeCard