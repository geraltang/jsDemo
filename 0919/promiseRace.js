//比如，点击按钮请求，当请求超过3秒还没有返回数据，提示用户请求超时
const dataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = '正常操作';
            // resolve(data)
            reject()
        }, 4000);
    })
}

const dataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = '超时提示';
            resolve(data)
        }, 3000);
    })
}

const handleBtnClick=()=>{
    let promiseArr = [dataOne(),dataTwo()];

    Promise.race(promiseArr)
    .then((res)=>{
        if(res === '超时提示'){
            console.log('超时，请重新请求')
        }else{
            console.log('正常操作')
        }
    })
}

handleBtnClick()