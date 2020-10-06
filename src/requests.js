const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle');
    }
}

// const getPuzzlOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle;
//     })
// }

const getCurrentCountry = async () => {
    const location = await getLocation();
    // const country = await getCountry(location.country);
    // return country;
    return getCountry(location.country);
}

const getCountry = async (countryCode) => {
    const response = await fetch('restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch country');
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=275873e0e1ffb6');
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch the current location');
    }
}

export { getPuzzle  as default }

// const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyStatet === 4) {
//             reject('Unable to fetch data')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// });