// let form = {
//     client: null,
//     clientType: "M",
//     callType: null,
//     patientFirstName: 'M',
//     patientLastName: 'M',
//     DOB: null,
//     PHNumber: null,
//     address: 'M',
//     site: null,
// }

// let obj = Object.assign({},{
//     ...form,
//     DOB: '11/11/1988',
//     address: '10 Street',
// })
// form = {...obj}


// let arr = Object.keys(form).filter(key=>{
//     return form[key]==='M'
// })
// console.log(`${arr.join()} are required`)

// 第二题

// const input = [
//     {
//         title: "QA",
//         rows: [
//             {
//                 risk: "P1",
//                 Title: "Server down",
//             },
//             {
//                 risk: "P3",
//                 Title: "Permission issue",
//             },
//         ],
//     },
//     {
//         title: "Prod",
//         rows: [
//             {
//                 risk: "P5",
//                 Title: "Console log errors fix",
//             },
//             {
//                 risk: "P1",
//                 Title: "Server is in hung state",
//             },
//         ],
//     },
// ];

// const output = input.map(obj=>({
//     ...obj,
//     rows:obj.rows.filter(row123123=>row123123.risk==="P1")
// }))

// console.log(output)

// const products = [
//     {
//         "productId": "1",
//         "attributes": [
//             {
//                 "variant": "red",
//                 "price": "134.00"
//             }
//         ]
//     },
//     {
//         "productId": "2",
//         "attributes": [
//             {
//                 "variant": "green",
//                 "value": "3400.00"
//             },
//             {
//                 "variant": "pink",
//                 "price": "342.00"
//             }
//         ]
//     }
// ]

// let updateProducts = products.flatMap(({attributes,...rest})=>
//     attributes.map(attribute=>({
//         ...rest,
//         ...attribute
//     }))
// )
// console.log('updatedProducts', updateProducts)
