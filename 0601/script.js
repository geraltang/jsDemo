"use strict"

{
    const roles = ['student', 'teacher', 'boss']
    let role = roles[0]

    if (role === 'student') {
        console.log('hello!');
    } else if (role === 'teacher') {
        console.log('hi');
    } else if (role === 'boss') {
        console.log('??');
    } else {
        console.log("...");
    }

    if (role === roles[0]) {
        console.log('hello!');
    } else if (role === roles[1]) {
        console.log('hi');
    } else if (role === roles[2]) {
        console.log('??');
    } else {
        console.log("...");
    }

    switch (role) {
        case roles[0]:
            console.log('hello!');
            break;
        case roles[1]:
            console.log('hi');
            break;
        case roles[2]:
            console.log('??');
            break;
        default:
            console.log("...");
            break;
    }
}

{
    let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let cum = 0
    for (let i = 0; i < arrayNumber.length; i++) {
        cum += arrayNumber[i]
    }

    console.log(cum);

    cum = 0
    arrayNumber.forEach(num => {
        cum += num
    })

    console.log(cum);

    let num = 0
    while (num < 9) {
        arrayNumber[num] += 1
        num++
    }

    console.log(arrayNumber);

    let newArrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 10; i++) {
        newArrayNumber[i] = i + 5
    }

    console.log(newArrayNumber);

    newArrayNumber.forEach(num => {
        console.log(num)
    })

    for (let i = 0; i < newArrayNumber.length; i++) {
        console.log(newArrayNumber[i]);
    }

    let str = ''
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            str += `${i}*${j}=${i * j} `;
            if (i === j) {
                str += '\n'
            }
        }
    }
    console.log(str);
}

{
    function func1() {
        console.log("Hello World");
    }

    func1()

    function func2(info) {
        console.log(`${info} juice`);
    }

    func2("Orange")
    func2("Apple")

    function func3(a, b) {
        console.log(a + b);
    }

    func3(1, 2)

    function func4(array) {
        let cum = 0
        array.forEach(num => {
            cum += num
        })
        console.log(cum);
    }

    func4([1, 2, 3, 4, 5, 10, -100])

    function func4_1(a, b, ...rest) {
        let cum = a + b;
        rest.forEach(num => {
            cum += num
        })
        console.log(cum);
    }

    func4_1(1, 2, 3, 4, 5, 10, -100)

    function func5(a, b) {
        return a + b
    }

    let cum = func5(1, 2)
    console.log(cum);

    const obj = {
        name: "Raymond",
        age: 18
    }

    function func6(obj) {
        console.log("name: ", obj.name);
        console.log("age: ", obj.age);

        obj.name = "Tian"
        obj.age = 30
    }

    func6(obj)
    console.log(obj);

    function func7({ name, age }) {
        name = "Tian",
        age = 20
        return { name, age }
    }

    const newobj = func7(obj)
    console.log(newobj);
    console.log(obj);

    const func8 = function () {
        console.log('func8');
    }

    func8

    const arrow_func1 = () => {
        console.log('array_func1');
    }
    arrow_func1

    const arrow_func2 = a => {
        console.log(a);
    }

    const arrow_func3 = (a, b) => {
        console.log(a);
    }

    const array = [1, 2, 3, 4, 5]
    const array_func4 = (num) => {
        console.log(num);
    }
    array.forEach(array_func4)

}

{
    const radius = 1
    const location = { x: 1, y: 2 }
    const isVisible = true
    function draw() {
        console.log('draw');
    }

    draw()

    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 2
        },
        isVisible: true,
        draw1: function () {
            console.log('draw1');
        },
        draw2() {
            console.log('draw2');
        }
    }

    circle.draw1()
    circle.draw2()

    const circle2 = {
        radius: radius,
        location: location,
        isVisible: isVisible,
        draw: draw
    }

    circle2.draw()

    const circle3 = {
        radius,
        location,
        isVisible,
        draw
    }

    circle3.draw()
}

{
    const content = document.querySelector(".content")
    content.innerHTML = 'Hahaha'

    const contents = document.querySelectorAll(".content")

    console.log(contents);

    contents.forEach((node, index) => {
        node.innerHTML = `content ${index}`
    })

    // document.getElementById()
    // document.getElementsByClassName()

    const span = document.createElement('div')
    span.innerHTML = "<h1>Click Me</h1>"
    // contents[contents.length - 1].appendChild(span)
    const domBody = document.querySelector("body")
    domBody.appendChild(span)

    span.classList.add('active')
    // span.classList.remove('active')

    span.setAttribute('style', 'cursor: pointer')

    span.addEventListener('click', () => {
        span.classList.toggle('active')
    })
}
