
// TREINANDO PROMISE


const myPromise =  new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const message = "A Promise foi resolvida!"
    const error = "A Promise falhou!"
    resolve(message)
    reject(error)
  },2000)
})

myPromise.then((message)=>{
  console.log(message)
}).catch((error)=>{
  console.log(error)
})