
// TREINANDO PROMISE

console.log('Pedindo o Uber...')


const myPromise =  new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const message = "O uber chegou!"
    const error = "Motorista não encontrado :("
    resolve(message)
    reject(error)
  },3000)
})

myPromise.then((message)=>{
  console.log(message)
}).catch((error)=>{
  console.log(error)
})