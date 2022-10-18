const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slideCount = mainSlide.querySelectorAll('div').length
let activeSlideIndx = 0

sideBar.style.top = `-${(slideCount - 1) * 100}vh`

upButton.addEventListener('click', ()=> {
    changesSlide('up')
})

downButton.addEventListener('click', ()=> {
    changesSlide('down')
})

function changesSlide(direction) {
    if(direction === 'up'){
        activeSlideIndx++
        if(activeSlideIndx === slideCount) {
            activeSlideIndx = 0
        }
    } else if (direction === 'down') {
        activeSlideIndx--
        if(activeSlideIndx < 0) {
            activeSlideIndx = slideCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndx * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndx * height}px)`
}