import Link from 'next/link'

function Button() {
	return (
		<Link
			href='/'
			className='shadow-xl drop-shadow-xl  w-fit py-2 px-6 text-center block bg-white  dark:bg-dark-blue'
		>
			<button className='font-bold text-center'>
				<span className='text-xl'>← </span>Back
			</button>
		</Link>
	)
}
export default Button
