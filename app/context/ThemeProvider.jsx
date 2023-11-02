'use client'

import { ThemeProvider } from 'next-themes'

export default function ModeProvider({ children }) {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
