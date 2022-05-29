{
    console.log("hello world 2");

    let my_name = "Raymond"
    console.log(my_name);
    my_name = 'Tianyuan'
    console.log(my_name);

    let firstName = "Raymond", lastName = 'guan'
    console.log(firstName)
}

{
    let a = 1
    console.log(a);
    let b = 'this is a b'
    let b_1 = "this is a b_1"
    let b_3 = "he said: 'sfddf'"
    let b_4 = `he said:${b}`
    console.log(b_4);
    let b_5 = 'he said:' + b
    console.log(b_5);

    let b_6 = +'1' + a
    console.log(b_6);

    let c = true
    let d = undefined
    let e = null

    if (c) {
        console.log("good");
    } else if (d) {
        console.log("bad");
    } else if (e) {
        console.log("OK");
    } else {

    }

}

{
    let obj = {
        name: "Raymond",
        age: 18,
    }

    console.log(obj);
    console.table(obj);

    obj.income = 0
    console.table(obj);

    obj['name'] = 'Tianyang'
    console.table(obj);
}

{
    let obj = {
        name: "Raymond",
        age: 18,
    }

    let a = 1
    let b = a

    console.log(a, b);
    b = 2
    console.log(a, b);

    let obj_2 = obj
    console.log(obj, obj_2);
    obj_2.age = 30
    console.log(obj, obj_2);

    let obj_3 = { ...obj }
    console.log(obj, obj_3);
    obj_3.age = 100
    console.log(obj, obj_3);

    let user = {
        name: "Raymond",
        age: 18,
        profile: {
            cv: "https://xxx",
            id: 12121212
        }
    }

    let user2 = { ...user }
    user2.name = "Peter"
    console.log(user, user2);

    user2.profile.id = 78797989
    console.log(user, user2);
}

{
    let array = [1, 2, 3, "4", true, { name: "Raymond" }]
    console.log(array);

    array[0] = "sdufsd"
    console.table(array);

    let array_1 = array
    array_1[4] = false
    console.table(array);

    console.log(array.length);
    console.log(array[6]);
    array[100] = 78
    console.log(array[100]);
    console.log(array.length);

    array[100].name = "Tianyang"
    console.log(array[100]);
    console.log(array[100].name);

    array[101] = {}
    array[101].name = "Tianyang"
    console.log(array[101])
}

{
    // const password = 'sdfdf'

    const obj = {
        name: "sdfdf"
    }
    obj.name = "121wsd"
    console.log(obj);
}

{
    let x = 2
    let y = 3
    console.log(x ?? y)
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log(x ** y);
    console.log(Math.sqrt(100))
    console.log(x++);
    console.log(x);
    console.log(x--);
    console.log(x);
    console.log(++x);
    console.log(x);
    console.log(--x);
    console.log(x);
}

{
    let x = 10
    console.log(x > 1);
    console.log(x = 1);
    console.log(x == 1);
    console.log(x === 1);

    console.log(0 == false);
    console.log(0 === false);
}

{
    let point = 100
    if (point > 100) {
        console.log('gold');
    } else {
        console.log('silver');
    }

    console.log(point > 100 ? 'gold' : 'silver');
}

{
    console.log(true && true);
    let dayTime = 8
    if (dayTime > 18 && dayTime < 24) {
        console.log('night');
    } else {
        console.log('day');
    }

    console.log(false || true);

    if ((dayTime > 18 && dayTime < 24) ||
        (dayTime > 0 && dayTime < 6)) {
        console.log('night');
    } else {
        console.log('day');
    }

    console.log(0 || false);
    console.log('0' || false);

    console.log(false || 10);
    console.log(4 || 10);

    console.log(!!!!true);


}