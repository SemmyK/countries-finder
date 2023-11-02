'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import ModeButton from './ModeButton'

function Header() {
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
	return (
		<header className='bg-white shadow-lg dark:bg-dark-blue p-4'>
			<nav className='flex flex-nowrap justify-between items-center flex-column'>
				<div>
					<Link href='/'>
						<h1 className='font-bold xs:text-xl md:text-2xl lg:text-3xl'>
							Were in the world?
						</h1>
					</Link>
				</div>
				<div>{mounted && <ModeButton />}</div>
			</nav>
		</header>
	)
}
export default Header
