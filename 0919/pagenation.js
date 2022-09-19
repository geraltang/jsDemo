const backendData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = Array(100).fill(1)
            resolve(data)
        }, 100)
    })
}
//模拟的API

const fetchData = async (nthTry) => {
    try {
        const list = await backendData();
        if (list.length > 0) {
            let total = list.length;
            let page = 0;
            let limit = 100;
            let totalPage = Math.ceil(total / limit);
            const render = () => {
                if (page > totalPage) return;
                let arr = [];
                for (let i = page * limit; i < page * limit + 100; i++) {
                    arr.push(list[i])
                };
                render(page + 1);
            };
            render(page)
        };
    } catch (error) {
        if (nthTry === 1) return 'data is not available'
        fetchData(nthTry - 1);
    }
}

fetchData(3)