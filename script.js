let centerIndex = 2;
const previous = document.getElementById('previous')
const advantagesParent = document.querySelectorAll('.advantages')
const next = document.getElementById('next')
const loader = document.getElementById('preloader')


previous.addEventListener('click', () => {
    const advantagesElements = Array.from(document.querySelectorAll('.advantage'))
    let item = advantagesElements.pop()
    advantagesElements[0].parentNode.prepend(item)
    advantagesElements.unshift(item)
    
    advantagesElements.forEach((adventage, index) => {
        position = Math.abs(index - centerIndex)
    
        if (position === 0){
            adventage.classList.remove('submain')
            adventage.classList.remove('hide')
            adventage.classList.add('main')
        } else if (position === 1){
            adventage.classList.remove('main')
            adventage.classList.remove('hide')
            adventage.classList.add('submain')
        } else {
            adventage.classList.remove('main')
            adventage.classList.remove('submain')
            adventage.classList.add('hide')
        }
    });
})  

next.addEventListener('click', () => {
    const advantagesElements = Array.from(document.querySelectorAll('.advantage'))
    let item = advantagesElements.shift()
    advantagesElements[0].parentNode.appendChild(item)
    advantagesElements.push(item)
    
    advantagesElements.forEach((adventage, index) => {
        position = Math.abs(index - centerIndex)
    
        if (position === 0){
            adventage.classList.remove('submain')
            adventage.classList.remove('hide')
            adventage.classList.add('main')
        } else if (position === 1){
            adventage.classList.remove('main')
            adventage.classList.remove('hide')
            adventage.classList.add('submain')
        } else {
            adventage.classList.remove('main')
            adventage.classList.remove('submain')
            adventage.classList.add('hide')
        }
    });
})


window.addEventListener("load", function(){
    loader.classList.add('loaded')
    document.body.classList.add('scrolling-allowed')
})