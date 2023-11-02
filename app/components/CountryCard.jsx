import Image from 'next/image'
import Link from 'next/link'

function CountryCard({ country }) {
	return (
		<Link href={`/country/${country.commonName}`}>
			<section className=' flex justify-center items-stretch flex-col shadow-3xl m-0 rounded-sm '>
				<div className='w-full min-h-1/3 max-h-1/3 box-border mx-0 px-0 rounded-t-lg'>
					<Image
						src={country.flags.svg || country.flags.png}
						alt={
							country.flags.alt && country.flags.alt !== ''
								? country.flags.alt
								: country.commonName
						}
						width={500}
						height={200}
						className='block min-w-full  p-0 m-0 min-h-48 max-h-48 shadow-xl rounded-t-lg  object-cover w-full h-48'
					/>
				</div>

				<div className='m-6 max-h-3/4'>
					<h2 className='text-xl font-bold mb-6'>{country.commonName}</h2>
					<p>
						<span className='font-bold'>Population: </span>
						<span>{country.population}</span>
					</p>
					<p>
						<span className='font-bold'>Region: </span>
						<span>{country.region}</span>
					</p>
					<p>
						<span className='font-bold'>Capital: </span>
						<span>{country.capital}</span>
					</p>
				</div>
			</section>
		</Link>
	)
}
export default CountryCard
