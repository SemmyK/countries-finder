import Select from 'react-tailwindcss-select'

const options = [
	{ value: 'Africa', label: 'Afrika' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
]

function FilterCountries({ selectedOption, setSelectedOption }) {
	return (
		<div className=' w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/6 bg-white shadow-lg dark:bg-dark-blue box-border z-10'>
			<Select
				placeholder='Filter by Region'
				value={selectedOption}
				primaryColor={'hsl(0, 0%, 100%)'}
				id='type'
				onChange={value => setSelectedOption(value)}
				options={options}
				classNames={{
					list: 'bg-white border-transparent focus:border-dark-blue dark:focus:border-white focus:bg-white focus:ring-0 dark:bg-dark-blue dark:text-slate-200',
					menuButton: ({ isDisabled }) =>
						`flex text-sm text-neutral-800 border border-none
											dark:border:slate-200 rounded shadow-sm transition-all duration-300
											 focus:bg-gray-300 
									dark:focus:bg-gray-800 
											dark:bg-slate-100  dark:text-neutral-800 focus:outline-none ${
												isDisabled
													? 'dark:bg-dark-blue bg-gray-200'
													: '  bg-slate-400 dark:bg-dark-blue hover:border-dark-blue-400 focus:border-0 focus:ring focus:ring-0 dark:hover:border-neutral-400 dark:focus:border-0 dark:focus:ring dark:focus:ring-0'
											}`,
					searchBox:
						'h-full w-fit dark:focus:border-neutral-200 dark:focus:bg-dark-blue',
					menu: 'block w-full h-full rounded-md bg-transparent border-transparent focus:border-dark-blue dark:focus:border-white focus:bg-white focus:ring-0 dark:bg-dark-blue dark:text-slate-200 absolute',
					listItem: ({ isSelected }) =>
						`block w-full transition duration-200 px-2 py-2 cursor-pointer select-none truncate bg-white border-transparent hover:bg-slate-600  hover:text-slate-200 focus:border-dark-blue dark:focus:border-white focus:bg-gray-400 focus:ring-0 dark:bg-dark-blue dark:text-slate-200  dark:hover:bg-white dark:hover:text-dark-blue   ${
							isSelected
								? `font-bold border-l-dark-blue dark:border-l-white border-l-4 dark:text-white dark:bg-dark-blue dark:bg-gray-800 hover:bg-slate-600  hover:text-slate-200 `
								: `text-dark-blue-500 dark:bg-neutral-600 dark:text-slate-200 z-20 hover:bg-slate-600 hover:text-slate-200 hover:border-l-dark-blue hover:dark:border-l-white hover:border-l-2`
						}`,
				}}
			/>
		</div>
	)
}
export default FilterCountries
