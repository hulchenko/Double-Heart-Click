


const times = document.querySelector('#times')
const divs = document.querySelectorAll('div')

let clickTime = 0
let timesClicked = 0

divs.forEach(div => {
    div.addEventListener('click', function (e) {
        if (clickTime === 0) {
            clickTime = new Date().getTime()
        } else {
            if ((new Date().getTime() - clickTime) < 900) {
                
                const heart = document.createElement('i')
                heart.classList.add('fas')
                heart.classList.add('fa-heart')

                const x = e.clientX
                const y = e.clientY
                const leftOffset = e.target.offsetLeft
                const topOffset = e.target.offsetTop

                const xInside = x - leftOffset
                const yInside = y - topOffset

                heart.style.top = `${yInside}px`
                heart.style.left = `${xInside}px`

                this.appendChild(heart)
                

                clickTime = 0
                times.innerHTML = ++timesClicked

                setTimeout(() => heart.remove(), 500)
            } else {
                clickTime = new Date().getTime()
            }
        }
    })
})

