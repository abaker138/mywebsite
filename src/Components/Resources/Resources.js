import React from 'react';
import './Resources.css'
import CodeCard from '../CodeCard/CodeCard.js'

const Resources = ({ reslist }) => {
	return (

		<div>
			<h3 className='resCall'>Check out my Code!</h3>
			<div className='resCards'>
				{ 
					reslist.map((user, i) => {
						return ( <CodeCard 
						key={i}
						name={reslist[i].name}
						logo={reslist[i].logo}
						
						
						/>
						);
				})


				}
				{ console.log(reslist)

				}
			</div>

		</div>
		)
}

export default Resources;