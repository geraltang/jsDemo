console.log("input from JS")

const co11n = document.querySelector('.co11n')
co11n.innerHTML = '<h1>test from js</h1>'

let qtime = 100
console.log(qtime > 100 ? 'good' : 'bad')

let time = 6
if (time > 18 && time < 24) {
    console.log('night')
} else {
    console.log('day')
}

let daytime = 7
if ((daytime > 18 && daytime < 24) || (daytime > 0 && daytime < 6)) {
    console.log('truenight')
} else {
    console.log('day')
}

co11n.addEventListener('click', () => {
    co11n.classList.toggle('active')
})

co11n.setAttribute('style', 'cursor: pointer')