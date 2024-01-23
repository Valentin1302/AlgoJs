// const p = new Promise((resolve, reject) => {
//     resolve(4)
// })

function waitSync(duration){
    const t = Date.now()
    while (Date.now() - t < duration){
    }
}
function wait(duration) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(duration);
        }, duration)
  });
}

function waitAndFail(duration) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(duration);
        }, duration)
       });
}


 async function main(){
   const duration = await wait(2000)
   console.log(`Duration: ${duration}`)
   return 5
 }

 function waitAndLog(duration, msg) {
    return  wait(duration).then(() => console.log(msg))
 }

const p = new Promise((r) => {
    console.log('Hello')
    r(2)
 })
 p.then(() => console.log('then'))
 waitSync(2000)
 console.log('Les gens')


// Promise.all([waitAndFail(1000), wait(2000)])
//   .then(console.log)
//   .catch(console.log)

// Promise.allSettled([wait(1000), waitAndFail(2000)])
//   .then(console.log)
//   .catch(console.log)

//   Promise.any([waitAndFail(1000), wait(2000)])
//   .then(console.log)
//   .catch(console.error)

// const a = await Promise.race([waitAndFail(1000), wait(2000)])
//   .then(console.log)
//   .catch(console.error)


// waitAndFail(2000)
//    .then(() => {
//      console.log('Attente 2s')
//      return wait(1000)
//    })
//    .then(() => {
//       console.log('Attente 1s')
//    })
//    .catch(() => null)