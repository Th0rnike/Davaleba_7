// // then / catch


// function mySetTimeout(delay){
//     return new Promise(resolve => setTimeout(resolve, delay))
// }

// function toyShop(){
//     console.log("started toy production")

//     mySetTimeout(3000)
//         .then(() => {
//             console.log("Toy has been created")
//             return mySetTimeout(2000)
//         })
//         .then(() => {
//             console.log("deliver toys")
//             return mySetTimeout(1000)
//         })
//         .then(() => {
//             console.log("Toys sold")
//         })
// }

// toyShop()



// async await
function mySetTimeout(delay){
    return new Promise(resolve => setTimeout(resolve, delay))
}

async function toyShop(){
    console.log("START")
    try {
        await mySetTimeout(3000)
        console.log("Toy has been created")

        await mySetTimeout(2000)
        console.log("Deliver toys")

        await mySetTimeout(1000)
        console.log("Toys sold")
    } catch (error) {
        console.log(error)
    }
}

toyShop()







// async / await with reject


// function mySetTimeout(delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let rand = Math.random()
//             if(rand < 0.9){
//                 resolve("Success")
//             }else{
//                 reject("Failure")
//             }
//         }, delay)
//     })
// }

// async function toyShop(){
//     console.log("START")
//     try {
//         await mySetTimeout(3000)
//         console.log("Toy has been created")

//         await mySetTimeout(2000)
//         console.log("Deliver toys")

//         await mySetTimeout(1000)
//         console.log("Toys sold")
//     } catch (error) {
//         console.log(error)
//     }
// }

// toyShop()


