import React from 'react';
import './WeatherInfo.css';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

const WeatherInfo = () => {
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);

	const sunset = new Date(apiData?.sys?.sunset * 1000).toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});

	const temp = Math.round(apiData?.main?.temp);

	const minTemp = apiData && apiData.weather && apiData.weather[0] && apiData.weather[0].main;

	return (
		<div className='weatherInfoContainer'>
			{apiData.wind && (
				<div className='weatherInfoContainer--sunset'>
					<img src='https://cdn-icons-png.flaticon.com/512/2912/2912036.png' />
					<div>{sunset}</div>
				</div>
			)}

			{apiData.wind && <div className='weatherInfoContainer--currentTemp'>{temp}°C</div>}
			<div className='weatherInfoContainer-Description'>
				<div>{minTemp}</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
