import React from 'react';
import Pirate from './Pirate.js';


const PirateList = (props) => {

	const pirates = props.pirates.map((pirate, index) => {
		return (
			<ul key={index} className="component_item">
				<div className="component">
					<Pirate pirate={pirate}/>
				</div>
			</ul>
		)

	})

	return (
		<ul>
		{pirates}
		</ul>

	)
}
 export default PirateList;
