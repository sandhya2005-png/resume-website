// function f1(data) {
//     console.log('hello:f1:$(data)');
//     f2();
// }
// function f2(data){
//     console.log("hello : f2");
// }
// setTimeout(f1, 3000,"hello")
// function success(){
//     console.log("Success")
// }
// function fail(){
//     console.log("Fail")
// }
// function error(){
//     console.log("Error")
// }
// function exec(data, callback){
//     if(data){
//         console.log('balance : ${data}');
//     }
//     // callback()
//     setTimeout(callback,3000)
// }
// function trigger(data){
//     const data=1
//     if(data > 0){
//         exec(data,success)
//     }
//     else if (data<=0){
//         exec(data, fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// trigger()

async function API() {
    try{
        const response = await fetch ('https://66e526f85cc7f9b6273c6cb5.mockapi.io/users')
        const data= await response.json()
        // console.table(data)
        return data;
    }catch(error){
        console.log(error)
    }

        // const response = await fetch ('https://66e526f85cc7f9b6273c6cb5.mockapi.io/users')
        // const data = response.json()
        // console.log(data)
        // return data;
}
// API()
// const Apidata = API()
// console.log(Apidata)

async function APIDATA(){
    const apidata=await API()
    console.log(apidata)
    const mockdata=[{
        "name" : "hello"
    }]
    // const structuredatamapx = mockdata.map({data) => {console.log(data)})
    const activeusers=apidata.filter(data => data.isActive)
    console.log(activeusers)
    const structuredatamap = activeusers.map((data) => { console.log(data)})
    // console.log(structureddata)
}
APIDATA()

function Pro() {
    return new Promise((resolve, reject) => {
        const x=false;
        setTimeout(() => {
            if (x) {
                resolve("Success")
            }
            else{
                reject("error")
            }
        }, 3000)
    })
}

async function datax() {
    try {
        const response = await Pro()
        console.log(response)
    } catch(e) {
        console.log(e)
    }
}
datax()
//Pro().then(data => { console.log(data) }.catch()