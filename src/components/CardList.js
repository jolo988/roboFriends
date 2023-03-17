import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	return (
        <div>
           	{
           		robots.map((user, i) => {
					return (
						<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}


export default CardList

// {} to know it's JS within JSX
// without specific key prompt -> won't know which to change -> change entire DOM
// with 'key={i}', react knows which to remove/change 
// with loops/map, must have specific key
// key prop should have something that doesn't change (like an index)