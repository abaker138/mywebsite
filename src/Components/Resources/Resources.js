import React from 'react';
import './Resources.css'
import CodeCard from '../CodeCard/CodeCard.js'

const Resources = () => {
	return (

		<div>
			<h3 className='resCall'>Check out my Code!</h3>
			<div className='resCards'>
				<CodeCard />
				<CodeCard />
				<CodeCard />
				<CodeCard />
			</div>

		</div>
		)
}

export default Resources;