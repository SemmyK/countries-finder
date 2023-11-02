'use client'

import { Suspense, useEffect, useState } from 'react'

import CountryCard from './CountryCard'
import FilterCountries from './FilterCountries'
import SearchCountry from './SearchCountry'
import Loading from '../loading'

function CountryList({ countries }) {
	const [filteredCountries, setFilteredCountries] = useState(null)
	const [inputState, setInputState] = useState('')
	const [selectedOption, setSelectedOption] = useState(null)

	useEffect(() => {
		if (selectedOption) {
			const filtered = countries.filter(country => {
				return country.region.includes(selectedOption.value)
			})
			setInputState('')
			setFilteredCountries(filtered)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOption])

	useEffect(() => {
		const filtered = countries.filter(country => {
			return country.commonName
				.toLowerCase()
				.startsWith(inputState.toLowerCase())
		})
		setSelectedOption(null)
		setFilteredCountries(filtered)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputState])

	return (
		<article className='min-h-screen min-w-screen bg-light-gray dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white mt-2 mb-10'>
			<section className='flex flex-wrap justify-center sm:justify-between items-center flex-row md:flex-column m-10'>
				<SearchCountry inputState={inputState} setInputState={setInputState} />
				<FilterCountries
					setSelectedOption={setSelectedOption}
					selectedOption={selectedOption}
				/>
			</section>
			<section className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 p-0  w-11/12 rounded-t-lg max-w-11/12 xl:max-w-6xl mx-auto text-sm '>
				<Suspense fallback={<Loading />}>
					{filteredCountries &&
						filteredCountries.map(country => (
							<div
								key={country.commonName}
								className='w-full shadow-2xl drop-shadow-2xl dark:shadow-dark-blue origin-center glassCard dark:bg-very-dark-blue-bg dark:hover:bg-dark-blue rounded-lg '
							>
								<CountryCard country={country} />
							</div>
						))}
				</Suspense>
			</section>
		</article>
	)
}
export default CountryList
