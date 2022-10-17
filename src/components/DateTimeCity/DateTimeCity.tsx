import React, { useContext } from 'react';
import './DateTimeCity.css';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../../RootContainer';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import axios from 'axios';

type Inputs = {
	city: string;
};

const DateTimeCity: React.FC = () => {
	//context
	const { cityName, setCityName, apiData, setApiData } = useContext(Context);

	//react-form-hook library
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	//react-query
	async function fetchPosts() {
		const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=698a70a0d4734a6f8dc9a87e0aed884a`);
		console.log(data);
		return data;
	}
	const { data, isError, error, refetch } = useQuery('weather', fetchPosts, { enabled: false });

	if (error) {
		return <h1>error</h1>;
	}
	fetchPosts();
	const onSubmit = (data: { city: string }) => {
		console.log(data);
		setCityName(data.city);
		refetch();
	};

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
			<form
				action='#'
				className='container__form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<SearchIcon className='container__icon' />
				<input
					// name="city"
					type='search'
					className='container__input'
					placeholder='Eg. Mumbai....'
					{...register('city')}
				/>
			</form>

			<h1 className='container__cityName'>{cityName}</h1>
		</div>
	);
};

export default DateTimeCity;
