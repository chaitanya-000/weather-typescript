import React from 'react';
import './WeatherInfo.css';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

const WeatherInfo = () => {
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);
	console.log(apiData);

	const sunset = new Date(apiData?.sys?.sunset * 1000).toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});
	// console.log(sunset);

	const temp = Math.round(apiData?.main?.temp);

	const minTemp = apiData && apiData.weather && apiData.weather[0] && apiData.weather[0].description;
	console.log(minTemp);

	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude;
		let long = position.coords.longitude;
		console.log(lat);
		console.log(long);
	});
	return (
		<div className='weatherInfoContainer'>
			<div className='weatherInfoContainer--sunset'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/2294/2294957.png'
					alt=''
				/>
				<div>{sunset}</div>
			</div>

			<div className='weatherInfoContainer-tempMin'>{minTemp}</div>

			<div className='weatherInfoContainer--currentTemp'>
				<div>{temp}°C</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
