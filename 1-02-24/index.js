// let greet1 = "Hello 1"
// let greet2 = "Hello 2"

// console.log(greet1)
// // for (let i = 0; i < 50; i++) {
// //     console.log("Done", i)

// // }
// setTimeout(() => {
//     console.log("Async Greet")
// }, 1000);
// console.log(greet2)

let request = new XMLHttpRequest()


request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();

request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.responseText)
    }else if(request.readyState === 4){
        console.log("404 ERROR")
    }
    // console.log(request.status)
    //     console.log(request, request.readyState);
})
