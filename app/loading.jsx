import { ScaleLoader } from 'react-spinners'

function Loading() {
	return (
		<div className='min-h-screen flex justify-center items-center'>
			<ScaleLoader
				height={100}
				margin={6}
				width={10}
				color='hsl(209, 23%, 22%)'
				className='my-auto'
			/>
		</div>
	)
}
export default Loading
