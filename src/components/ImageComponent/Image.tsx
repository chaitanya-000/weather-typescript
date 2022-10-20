import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

import './Image.css';

const Image = () => {
	//context
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);

	let weather = apiData && apiData.weather && apiData.weather[0] && apiData.weather[0].main;
	console.log(apiData);

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
					src='https://img.freepik.com/free-vector/waiting-rain-concept-illustration_114360-7064.jpg?w=1380&t=st=1666247838~exp=1666248438~hmac=edafc81ac2c2d94174ee457a7446a11ae63fd161b4dc4f718b90b67c7c3c448f'
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
