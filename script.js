//Variables to access thumbnails and hero image
const thumb = document.querySelectorAll(`.thumbnail`)
const large = document.querySelector(`#large-img`)

//Function to get images attributes and assign them to hero image
const thumbClick = function(event){
    const thumbNail = event.target
    const url = thumbNail.getAttribute(`src`)
    console.log(url)
    large.setAttribute(`src`, url)
}

//Allows each thumbnail to be individually selected
thumb.forEach(function(eleThumb){
    eleThumb.addEventListener(`click`, thumbClick)
})