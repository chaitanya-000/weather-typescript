import axios from 'axios';
import React, { useState, createContext } from 'react';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import DateTimeCity from './components/DateTimeCity/DateTimeCity';
import Image from './components/ImageComponent/Image';
import WeatherInfo from './components/weatherInfo/WeatherInfo';
import './rootContainer.css';

//react-query
const queryClient = new QueryClient();

//Context
export const Context = createContext<{
	cityName: string | undefined;
	setCityName: React.Dispatch<React.SetStateAction<string | undefined>>;
	apiData: any;
	setApiData: React.Dispatch<React.SetStateAction<never[]>>;
}>({
	cityName: undefined,
	setCityName: () => {},
	apiData: [],
	setApiData: () => {},
});

const RootContainer = () => {
	//States
	const [cityName, setCityName] = useState<undefined | string>('City name');
	const [apiData, setApiData] = useState([]);

	return (
		<Context.Provider value={{ cityName, setCityName, apiData, setApiData }}>
			<QueryClientProvider client={queryClient}>
				<div className='rootContainer '>
					<DateTimeCity />
					<Image />
					<WeatherInfo />
				</div>
			</QueryClientProvider>
		</Context.Provider>
	);
};

export default RootContainer;
