function f1(){
    console.log("f1")
}
const f2=() => {
    console.log("f2")
    let n=5
    for (let i = 0; i <n; i++) {
        console.log(i)
      }
      
}

const f3=()=>console.log("f3")
f1()
f2()
f3()