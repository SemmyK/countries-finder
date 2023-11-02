import CountryList from './components/CountryList'
import fetchCountries from './lib/getCountries'

const getCountries = async () => {
	try {
		const countries = await fetchCountries()
		return countries
	} catch (error) {
		console.log(error)
	}
}

export default async function Home() {
	const countries = await getCountries()
	return (
		<main className='min-h-screen min-w-screen bg-light-gray dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white'>
			{countries && <CountryList countries={countries} />}
		</main>
	)
}
