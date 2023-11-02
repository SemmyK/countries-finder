import Link from 'next/link'
import { Nunito } from 'next/font/google'

import './globals.css'

import ModeButton from './components/ModeButton'
import ModeProvider from './context/ThemeProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
	title: 'Countries finder',
	description:
		'App for finding info about all countries in the world. Frontend Mentor - REST Countries API with color theme switcher solution.',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className='light'
			style={{ colorScheme: 'light' }}
			suppressHydrationWarning
		>
			<body
				className={`${nunito.className} min-h-screen min-w-screen bg-light-gray dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white`}
			>
				<ModeProvider>
					<header className='bg-white shadow-lg dark:bg-dark-blue p-4'>
						<nav className='flex flex-nowrap justify-between items-center flex-column'>
							<div>
								<Link href='/'>
									<h1 className='font-bold xs:text-xl md:text-2xl lg:text-3xl'>
										Were in the world?
									</h1>
								</Link>
							</div>
							<div>
								<ModeButton />
							</div>
						</nav>
					</header>
					{children}
					<footer className='bg-white shadow-inner  dark:bg-dark-blue w-full p-4 flex flex-wrap justify-center items-center flex-column'>
						<div className='text-center w-fit font-semibold p-1 '>
							Challenge by Frontend Mentor.
						</div>
						<div className='text-center w-fit  font-semibold p-1 '>
							Coded by Semmy.
						</div>
						<div className='text-center w-fit  font-semibold p-1 '>
							&copy; 2023
						</div>
					</footer>
				</ModeProvider>
			</body>
		</html>
	)
}
