const dataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'first data';
            // resolve(data)
            reject()
        }, 800);
    })
}

const dataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'second data';
            resolve(data)
        }, 700);
    })
}

const handleBtnClick = () => {
    Promise.all([dataOne().catch(err=>err), dataTwo()])
        .then((res) => {
            let verifyResult = res.every(item=>item)
            console.log(verifyResult?'通过验证':'未通过验证')
        })
}
handleBtnClick()