console.log('hello world')

{
    const radius = 1
    const location = { x: 1, y: 2 }
    const isVisible = true
    function draw() {
        console.log('draw');
    }

    draw2()

    function draw2(){
        console.log('draw2')
    }

    const circle1 = {
        radius: 1,
        location: {
            x: 1,
            y: 2
        },
        isVisible: true,
        draw1: function () {
            console.log('draw1');
        },

    }

    circle1.draw1()

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

    function createCircle(radius) {
        return {
            radius,
            draw1() {
                console.log('draw1', radius, this.radius);
            },
            draw2: function () {
                console.log('draw2', radius, this.radius);
            },
            draw3: () => {
                console.log('draw3', radius, this.radius);
            },
        }
    }

    const circle4 = createCircle(4)
    circle4.draw1()
    circle4.draw2()
    circle4.draw3()

}

{
    class Car {
        seat = 4
        sit(num) {
            num > this.seat ? console.log('too much') : console.log('good');
        }
    }

    const car = new Car()

    car.sit(5)
}

{
    class NewClass {
        static total = 100
        borrow() {
            NewClass.total--
            console.log(NewClass.total);
        }
        bringBack() {
            NewClass.total++
            console.log(NewClass.total);
        }

        static clean() {
            NewClass.total = 0
            console.log(NewClass.total);
        }
    }

    const newClass = new NewClass()
    const newClass2 = new NewClass()
    const newClass3 = new NewClass()
    const newClass4 = new NewClass()
    newClass.borrow()
    newClass2.borrow()
    newClass3.bringBack()
    newClass4.bringBack()
    NewClass.clean()
}
