/*
# Creator: Aryon Rabello
# GitHub: https://github.com/arriaoedu123/
# Creation date: 07/12/2021
# Version: 1.0
*/

const gradientBtn = document.querySelector(".gradient-button")
const boxShadowBtn = document.querySelector(".box-shadow-button")
const gradientGenerator = document.querySelector(".gradient-generator")
const boxShadowGenerator = document.querySelector(".box-shadow-generator")

gradientBtn.addEventListener("click", () => {
	gradientGenerator.style.display = "block"
	boxShadowGenerator.style.display = "none"
})

boxShadowBtn.addEventListener("click", () => {
	gradientGenerator.style.display = "none"
	boxShadowGenerator.style.display = "block"
})