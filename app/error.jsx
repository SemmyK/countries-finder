'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import world from '../public/world.png'

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='flex flex-column flex-wrap justify-center items-center text-center'>
			<h2 className=' mt-10 w-full text-4xl text-mid-brown font-bold'>
				Something went wrong!
			</h2>
			<p className='w-full my-5 mx-auto text-bright-brown font-semibold text-2xl '>
				It’s a big world different people, different nations, different cultures
				anything can go wrong.
			</p>
			<div className='w-full mx-auto text-center'>
				<Image
					src={world}
					alt='spilled coffee'
					width={300}
					height={300}
					className='block w-fit mx-auto'
				/>
			</div>
			<div className='w-full '>
				<div className='shadow-xl drop-shadow-xl  w-fit py-2 px-6 text-center block bg-white  dark:bg-dark-blue'>
					<button
						onClick={() => reset()}
						className='font-bold text-center m-0 border-0'
					>
						<span className='text-xl'>← </span>Back
					</button>
				</div>
			</div>
		</div>
	)
}
