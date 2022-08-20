// var student;


// student = 'ABC';


// var student1, student2, student3;

// var a = 0;

// car = "ABC"
// console.log(car)
// var car;

// var amIAGuy = true;
// var amIAWoman = false

// var age = undefined;
// var gender = null;

// var teacher = {};
// var gender = "gender"
// teacher = {
//     teacherName: 'ABC',
//     age: 18,
//     gender: "Male",
//     onDuty: true
// }
// teacher.age = 20
// teacher['gender'] = ['male']

// console.log(teacher);
// console.log(teacher.age);
// console.log(teacher[gender]);

// var students = ['Jing', 'Emily', 'Holly', 'Shawn'];
// console.log(students[2])

// var concat = "2" + "3";
// console.log(concat)

// var names = ['Jing','Emily','Holly','Jack'];
// names.push('Tom');
// names.pop();
// names[2] = 'Tom'
// console.log(names);

// var twoDimentionalArray = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(twoDimentionalArray[1][2]);

// var age = 18
// console.log(age < 18 ? "over": "under");

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// for (var i = 0; i < 10; i++){
//     for(var j = 0; j < 10; j++){
//         console.log('hello');
//     }
// }

// var i = 0
// while (i < 10){
//     console.log(i);
//     i++;
//     if (i===5){
//         i++;
//         break;
//     }
// }

// var res = [];
// for (var i = 0; i <= 100; i++) {

//     if (i % 4 === 0 && i % 5 !== 0) {
//         res.push(i);
//     }
//     if (res.length === 10) {
//         break;
//     }
// }
// console.log(res);

// var res =[];
// function firstTen(param1, param2, param3){
//     for (var i=0; i<= param3; i++){
//         if (res.length === 10){
//             break
//             // return console.log(res)
//         }
//         if (i% param1 === 0 && i% param2 !== 0){
//             res.push(i);
//         }
//     }
//     return res
// }

// console.log(firstTen(2,5,50));

var sum = function (num1, num2) {
    return num1 + num2;
}

var newSum

function firstSumThenDouble(sumFunc123, num3, num4) {
    var sum1 = sumFunc123(num3, num4);
    return sum1 * 2
}

console.log(firstSumThenDouble(sum, 2, 3));