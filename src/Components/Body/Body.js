import React, {Component} from 'react'
import './Body.css'
import YouTubevid from '../Youtube/Youtube.js'





class Intro extends Component {
	render(){
	return (
			<div className='introbody'>

					<div className='intro'>
							<div>
							
								<h1 className='myname'>Andrew Baker</h1>
									<ul className='maker'>
										<li className='things'>Front End Engineer</li>
										<li className='things'>Woodworker</li>
										<li className='things'>Blacksmith</li>
									
									</ul>
							</div>	

						<YouTubevid />
					</div>

			</div>

		)
}}

export default Intro;