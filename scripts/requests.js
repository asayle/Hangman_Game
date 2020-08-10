const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to get puzzle')
    }
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) =>{
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountry(location.country)
//     return country 
// }
    
const getCountry = async (countryCode) => {
    const response = await fetch ('http://restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data= await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('unable to get country')
    }
}

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status == 200) {
//             return response.json() 
//         } else {
//             throw new Error('unable to fetch country')
//         }
//     }).then((data) => {
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         return country
//     })
// }

const getLocation = async () => {
    const response = await fetch ('http://ipinfo.io/json?token=4f6ab0a90d833b')
    if (response.status === 200){
        return response.json()
    } else {
        throw new Error('unable to fetch info')
    }
}

// const getLocationOld = () => {
//     return fetch('http://ipinfo.io/json?token=4f6ab0a90d833b').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('unable to fetch info')
//         }
//     })
// }


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('an error has taken place')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })
    