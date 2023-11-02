import Link from 'next/link'
import Image from 'next/image'

import world from '../public/world.png'

export default function NotFound() {
	return (
		<div className='flex flex-column flex-wrap justify-center items-center text-center  h-5/6 min-w-screen'>
			<h2 className=' mt-10 w-full text-4xl text-mid-brown font-bold'>
				Not found!
			</h2>
			<p className='w-full my-5 mx-auto text-bright-brown font-semibold text-2xl '>
				It’s a big world easy to get lost.
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
			<div className='w-full mx-auto'>
				<Link
					href='/'
					className='shadow-xl drop-shadow-xl mx-auto  w-fit py-2 px-6 text-center block bg-white  dark:bg-dark-blue'
				>
					<button className='font-bold text-center'>Back to Homepage</button>
				</Link>
			</div>
		</div>
	)
}
