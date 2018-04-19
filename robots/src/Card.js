import React from 'react';

const Card = ({ name, email, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`http://www.robohash.org/${id}?size=200x200`} alt='robots'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div> // we need to import react to use JSX

	);
}

export default Card;