import React, { useContext, useRef } from 'react';
import './DateTimeCity.css';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../../RootContainer';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

//Component/////////////////////////////////
const DateTimeCity: React.FC = () => {
	//context
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);

	//ref
	const inputRef = useRef<HTMLInputElement>(null);

	//onSubmit
	const handleSubmit = () => {
		// console.log('enter pressed');
		refetch();
		setCityName(inputRef.current?.value);
	};

	//react-query
	const fetchData = () => {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current?.value}&appid=698a70a0d4734a6f8dc9a87e0aed884a&units=metric`).then((data) => setApiData(data.data));
	};
	// console.log('apiData', apiData);
	const { data, refetch, isFetching, isLoading, isError, error, isSuccess } = useQuery<any, AxiosError>('weather', fetchData, { enabled: false });

	if (isLoading) {
		return <h1>loading.....</h1>;
	}
	if (isFetching) {
		return <h1>Fetching data.....</h1>;
	}

	//component TSX
	return (
		<div className='container'>
			<h2 className='container__day'>
				{new Date().toLocaleDateString('default', {
					weekday: 'long',
					month: 'long',
					day: 'numeric',
				})}{' '}
				2022
			</h2>
			<h2>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</h2>
			<form
				action='#'
				className='container__form'
				onSubmit={handleSubmit}
			>
				<SearchIcon className='container__icon' />
				<input
					ref={inputRef}
					type='search'
					className='container__input'
					placeholder='Enter city....'
					required
				/>
			</form>

			<h1 className='container__cityName'>{cityName}</h1>
		</div>
	);
};

export default DateTimeCity;
