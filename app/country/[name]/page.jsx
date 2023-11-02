import Image from 'next/image'
import Link from 'next/link'

import fetchCountries, { fetchCountryByName } from '@/app/lib/getCountries'

import Button from '@/app/components/Button'

export async function generateStaticParams() {
	const countries = await fetchCountries()

	return countries.map(country => {
		return {
			name: country.commonName,
		}
	})
}

const getCountry = async name => {
	// console.log(name)
	try {
		const country = await fetchCountryByName(name)

		return country
	} catch (error) {
		console.log(error)
		return
	}
}

export async function generateMetadata({ params }) {
	// read route params
	const { name } = params
	let formatedString = decodeURIComponent(name)

	// fetch data
	const country = await fetchCountryByName(formatedString)

	if (country) {
		return {
			title: country.commonName,
			description: `Details about ${formatedString}`,
		}
	} else {
		return {
			title: 'Country details',
			description: `Details about ${formatedString}`,
		}
	}
}

async function SingleCountry({ params }) {
	const { name } = params
	let formatedString = decodeURIComponent(name)

	const singleCountry = await getCountry(formatedString)

	return (
		singleCountry && (
			<article className='min-h-screen min-w-screen bg-light-gray dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white p-10 text-base'>
				<Button />
				<section className='mt-10 md:mt-20 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-10  xl:gap-20 content-start shadow-3xl m-0 rounded-sm '>
					<div className='w-full box-border md:col-span-2 lg:col-span-3 xl:col-span-2'>
						<Image
							src={singleCountry.flags.svg || singleCountry.flags.png}
							alt={
								singleCountry.flags.alt && singleCountry.flags.alt !== ''
									? singleCountry.flags.alt
									: singleCountry.commonName
							}
							priority
							width={300}
							height={150}
							className='block w-full  shadow-xl'
						/>
					</div>
					<div className='m-0 p-0 md:col-span-1 lg:col-span-2  xl:col-span-2 md:grid grid-cols-1 md:gap-x-10 md:gap-y-0'>
						<div className='mt-6 h-fit'>
							<h2 className='text-2xl lg:text-4xl font-bold mb-6'>
								{singleCountry.commonName}
							</h2>

							<section className='md:grid lg:grid-cols-2  md:gap-10'>
								<div className='mt-4'>
									<p className='mt-4'>
										<span className='font-bold'>Native Name: </span>
										<span>{singleCountry.nativeName}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Population: </span>
										<span>{singleCountry.population}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Region: </span>
										<span>{singleCountry.region}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Sub Region: </span>
										<span>{singleCountry.subregion}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Capital: </span>
										<span>{singleCountry.capital}</span>
									</p>
								</div>

								<div className='mt-8 my-2'>
									<p>
										<span className='font-bold'>Top Level Domain: </span>
										<span>{singleCountry.tld}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Currencies: </span>
										<span>{singleCountry.currencies}</span>
									</p>
									<p className='mt-4'>
										<span className='font-bold'>Languages: </span>
										{singleCountry.languages}
									</p>
								</div>
							</section>
						</div>

						<div className='mt-10 md:mt-5 flex flex-row flex-wrap justify-evenly lg:justify-stretch item-center w-full self-start'>
							<h2 className='text-xl font-bold mb-6 md:mb-0 lg:mb-0  mx-0 w-full lg:w-1/4 self-left text-left pr-4 mr-2'>
								Border Countries:
							</h2>

							{singleCountry && singleCountry.borders.length !== 0 ? (
								singleCountry.borders.map(countryN => (
									<Link key={countryN} href={`/country/${countryN}`}>
										<button className='block m-1 p-2  bg-white  dark:bg-dark-blue drop-shadow-2xl shadow-2xl'>
											{countryN}
										</button>
									</Link>
								))
							) : (
								<p className='text-lg'>No bordering countries</p>
							)}
						</div>
					</div>
				</section>
			</article>
		)
	)
}
export default SingleCountry
