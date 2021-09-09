const url = 'https://dog.ceo/api/breeds/image/random'
// querySelect -> Returns the first element that is a descendant of node that matches selectors.
const dogImg = document.querySelector('[data-js="dog-img"]')


// Success case
const validateHTTPStatus = dogData => {
    if(!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const setDogImage = ({ message: url }) => {
        dogImg.setAttribute('src', url)
}

// Error case
const handleRequestError = error => {
    console.log(error.message)
}

// fetch => Makes an HTTP request and retrieves the data from the url specified as an argument
fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImage)
    .catch(handleRequestError)



// ==================================================================================
// Another code
// const aPromise = new Promise((resolve, reject) => {
//     const aNumber = 37

//     // resolve(aNumber)
//     reject(aNumber)
// })

// // then => responsible for receiving the successful response from the promise.
// aPromise
//     .then(value => value)
//     .then(value => {
//         console.log(value)
//     })
//     .catch(rejectValue => {
//         console.log(rejectValue)
//     })