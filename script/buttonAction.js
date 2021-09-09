// Catching elements
const button = document.querySelector('button')
const popup = document.querySelector('.popup__wrapper')

// Create button action
button.addEventListener('click', () => {
    popup.style.display = 'block'
})

// Click to close image
popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup__close', 'popup__wrapper']
    // Some function traverses the array and checks if one of the strings meets the condition  
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none'
    }
})