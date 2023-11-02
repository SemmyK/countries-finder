function SearchCountry({ inputState, setInputState }) {
	return (
		<div className='relative flex mb-5 sm:mb-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/5 '>
			<div className='absolute inset-y-0 right-4 flex items-center pl-3'>
				<svg
					className='w-4 h-4 text-gray-500 dark:text-gray-400'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 20 20'
				>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
					/>
				</svg>
				<span className='sr-only'>Search icon</span>
			</div>
			<input
				type='text'
				id='search-navbar'
				className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white shadow-lg dark:bg-dark-blue'
				placeholder='Search for a country...'
				value={inputState}
				onChange={e => setInputState(e.target.value.trim())}
			/>
		</div>
	)
}
export default SearchCountry
