import React from 'react';
import './WeatherInfo.css';
import { useContext, useState } from 'react';
import { Context } from '../../RootContainer';

const WeatherInfo = () => {
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);
	console.log(apiData);

	return (
		<div className='weatherInfoContainer'>
			<div className='weatherInfoContainer--sunset'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/2294/2294957.png'
					alt=''
				/>
				<div>06:45Pm</div>
			</div>

			<div className='weatherInfoContainer--currentTemp'>
				<div>16°</div>
			</div>

			<div className='weatherInfoContainer-tempMin'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/2322/2322701.png'
					alt=''
				/>
				<div>4°C</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
