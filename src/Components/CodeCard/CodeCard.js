import React from 'react'
import './CodeCard.css'

const CodeCard = () => {
	return (
			<div className='card'>

				<img className='logo' src='https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png'
				alt= '' />

				<a className='link' href="https://github.com/abaker138" target='_blank'>
					<h4 className='cardText'>GitHub Repo</h4>
				</a>


			</div>

		)
}

export default CodeCard