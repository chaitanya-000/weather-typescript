import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

import './Image.css';

const Image = () => {
	//context
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);
	return (
		<div className='ImageContainer'>
			<img
				className='ImageContainer--image'
				src={`https://source.unsplash.com/random/?${cityName}`}
				alt=''
			/>
		</div>
	);
};

export default Image;
