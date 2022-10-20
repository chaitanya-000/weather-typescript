import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

import './Image.css';

const Image = () => {
	//context
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);

	let weather = apiData && apiData.weather && apiData.weather[0] && apiData.weather[0].main;
	console.log(`*****************`, weather);

	return (
		<div className='ImageContainer'>
			{weather === 'Rain' && (
				<img
					className='ImageContainer--image'
					src='https://www.canva.com/design/DAFPjZqQTMc/TG6WeJWlaD_ZQLjPUtbHew/watch?utm_content=DAFPjZqQTMc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
					alt=''
				/>
			)}
			{weather === 'Clouds' && <video src={`src/components/Peach Orange Illustrated Positivity Mental Health Quote Instagram Post.mp4`}></video>}
			{weather === 'Haze' && (
				<img
					className='ImageContainer--image'
					src='https://png.pngtree.com/png-vector/20210805/ourmid/pngtree-3d-cloud-illustration-vector-png-image_3780086.jpg'
					alt=''
				/>
			)}
			{weather === 'Mist' && (
				<img
					className='ImageContainer--image'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HrMAPgSlQlAY-ATjm57clfwcvv8b-wiT8vxnPLl0xBvsYu1s_LLcHhfEpwcsUG2S8BI&usqp=CAU'
					alt=''
				/>
			)}
		</div>
	);
};

export default Image;
