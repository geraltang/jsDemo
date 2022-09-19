const data = {
    lastName: "ben",
    firstName: "john",
    dob: "33",
    location: "sydney",
};
const backendData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(data)
            reject()
        }, 1000)
    })
}

const getData = async (nthTry) => {
    try {
        const data = await backendData();
        console.log(data)
        return data;
    }   catch (error) {
        //error handling
    //     console.log('err', error)
    //     if(error.response.status === 401){
    //         // back to login page
    //     }else if(error.response.status === 403){
    //         //token is expired, back to login page
    //     }else {

    //     }
    // }
        if(nthTry===1) return console.log('data is not available')  
        getData(nthTry-1)
    }

}

getData(3)