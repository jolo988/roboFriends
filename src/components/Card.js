import React from 'react';


const Card = (props) => {
	const { name, email, id } = props;
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card;

// alt -> mandatory field
// ?200x200 size
// tc: text-center
// dib: display: in-line block; br: border; pa: padding; ma: margin, grow: animation
// bw: border-width; shadows: hover shadow

// accept props
// src JS script