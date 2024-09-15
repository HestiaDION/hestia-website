let centerIndex = 2;
const advantages = document.querySelectorAll('.advantage')
const advantagesElements = Array.from(advantages)
const previous = document.getElementById('previous')
const advantagesParent = advantagesElements[0].parentNode
const next = document.getElementById('next')


previous.addEventListener('click', () => {
    const advantagesElements = Array.from(document.querySelectorAll('.advantage'))
    let item = advantagesElements.pop()
    advantagesParent.prepend(item)
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
    advantagesParent.appendChild(item)
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

advantages.forEach((adventage, index) => {
    position = Math.abs(index - centerIndex)

    if (position === 0){
        adventage.classList.toggle('main')
    } else if (position === 1){
        adventage.classList.toggle('submain')
    } else {
        adventage.classList.toggle('hide')
    }
});