export const fetchCountryByName = async name => {
	try {
		const allCountries = await fetchCountries()
		const oneCountry = allCountries.filter(con => con.commonName === name)
		const countryData = oneCountry[0]
		return countryData
	} catch (error) {
		console.log(error)
		console.error('Could not fetch country.')
		return
	}
}

export const fetchCountryByCode = (countries, codes) => {
	const countryData =
		countries &&
		countries.map(country => ({
			cca3: country.cca3,
			name: country.name,
		}))
	let data = []
	codes &&
		codes.borders &&
		codes.borders.map(code => {
			const singleCountry = countryData.filter(item => item.cca3 === code)
			data.push(singleCountry[0])
		})

	const names = data.map(item => item.name.common)
	return names
}

const getLanguages = country => {
	const keys = Object.keys(country.languages)
	const langArray = keys.map(key => country.languages[`${key}`])
	const langString = langArray.toString().replaceAll(',', ' | ')

	return langString
}

const getCurrency = country => {
	const keys = Object.keys(country.currencies)

	const money = []

	keys.map(key => money.push(country.currencies[`${key}`].name))
	let currencyString = money.toString().replaceAll(',', ' | ')
	return currencyString
}

export const getCountryName = name => {
	if (typeof name === 'string') {
		return name
	} else {
		const keys = Object.keys(name)

		let countryNames = {}
		if (keys.includes('common')) {
			countryNames.common = name.common
		}

		if (keys.includes('nativeName')) {
			const nativeArray = Object.keys(name.nativeName)
			const nativeKey = nativeArray[0]

			if (!nativeKey || nativeKey === undefined) {
				return countryNames
			}

			countryNames.native = name.nativeName[`${nativeKey}`].official
		}

		return countryNames
	}
}

export const getFinalCommonName = name => {
	if (typeof name === 'string') {
		return name
	} else {
		return name.common
	}
}

export const getFinalNativeName = name => {
	if (typeof name === 'string') {
		return name
	} else {
		return name.native
	}
}

const fetchCountries = async () => {
	try {
		const res = await fetch(
			'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,subregion,languages,currencies,borders,tld,population,cca3'
		)
		const countries = await res.json()

		const countryArray = []
		if (countries) {
			countries.map(countryData => {
				let singleCountryData = {}
				const countryNames = getCountryName(countryData.name)

				if (countryNames !== undefined) {
					singleCountryData.commonName = getFinalCommonName(countryNames)
					singleCountryData.nativeName = getFinalCommonName(countryNames)
				}

				const editedPopulation = countryData.population.toLocaleString()
				singleCountryData.population = editedPopulation

				const languagesArr = getLanguages(countryData)
				singleCountryData.languages = languagesArr

				const currencyArr = getCurrency(countryData)
				singleCountryData.currencies = currencyArr
				const borderCountries = fetchCountryByCode(countries, countryData)
				singleCountryData.borders = borderCountries
				singleCountryData.capital = countryData.capital[0]
				singleCountryData.region = countryData.region
				singleCountryData.flags = countryData.flags
				singleCountryData.subregion = countryData.subregion
				singleCountryData.tld =
					countryData.tld[0] === undefined ? 'not defined' : countryData.tld[0]
				singleCountryData.population = editedPopulation
				singleCountryData.cca = countryData.cca3
				singleCountryData.latlng = countryData.latlng

				countryArray.push(singleCountryData)
			})
		}

		countryArray.sort((a, b) => {
			return a.commonName.localeCompare(b.commonName)
		})

		return countryArray
	} catch (error) {
		console.error('Could not fetch countries.')
		return
	}
}

export default fetchCountries
