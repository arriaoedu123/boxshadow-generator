/*
# Creator: Aryon Rabello
# GitHub: https://github.com/arriaoedu123/
# Creation date: 07/12/2021
# Version: 1.0
*/

const boxShadowPreview = document.querySelector('.box-shadow-preview')
const radiusInput = document.querySelector('#radius')
const horizontalInput = document.querySelector('#horizontal')
const verticalInput = document.querySelector('#vertical')
const spreadInput = document.querySelector('#spread')
const blurInput = document.querySelector('#blur')
const copyBtn = document.querySelector('.copy')

const radiusCode = document.querySelector('.radius-code')
const horizontalCode = document.querySelector('.horizontal-code')
const verticalCode = document.querySelector('.vertical-code')
const spreadCode = document.querySelector('.spread-code')
const blurCode = document.querySelector('.blur-code')

radiusInput.addEventListener('input', () => {
	let radiusInputValue = radiusInput.value
	boxShadowPreview.style.setProperty("--radius", `${radiusInputValue}px`)
	radiusCode.innerHTML = `${radiusInputValue}px`

	if (radiusInputValue == 130) { radiusCode.innerHTML = "50%" }
})

horizontalInput.addEventListener('input', () => {
	let horizontalInputValue = horizontalInput.value
	boxShadowPreview.style.setProperty("--horizontal", `${horizontalInputValue}px`)
	horizontalCode.innerHTML = `${horizontalInputValue}px `
})

verticalInput.addEventListener('input', () => {
	let verticalInputValue = verticalInput.value
	boxShadowPreview.style.setProperty("--vertical", `${verticalInputValue}px`)
	verticalCode.innerHTML = `${verticalInputValue}px `
})

spreadInput.addEventListener('input', () => {
	let spreadInputValue = spreadInput.value
	boxShadowPreview.style.setProperty("--spread", `${spreadInputValue}px`)
	spreadCode.innerHTML = `${spreadInputValue}px `
})

blurInput.addEventListener('input', () => {
	let blurInputValue = blurInput.value
	boxShadowPreview.style.setProperty("--blur", `${blurInputValue}px`)
	blurCode.innerHTML = `${blurInputValue}px `
})