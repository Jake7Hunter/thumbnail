const thumb = document.querySelectorAll(`.thumbnail`)

const large = document.querySelector(`#large-img`)

// const setHeroImage = (thumb) => {
//     const url = thumb.getAttribute(`src`)
//     console.log(url)
//     large.setAttribute(`src`, url)

// }

// thumb.addEventListener(`click`, function(event){
//     const thumbNail = event.target
//     const url = thumbNail.getAttribute(`src`)
//     console.log(url)
//     large.setAttribute(`src`, url)
// })

const thumbClick = function(event){
    const thumbNail = event.target
    const url = thumbNail.getAttribute(`src`)
    console.log(url)
    large.setAttribute(`src`, url)

}

thumb.forEach(function(eleThumb){
    eleThumb.addEventListener(`click`, thumbClick)
})