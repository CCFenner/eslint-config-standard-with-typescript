async function main () {
  return makePromise()
}

new Promise((resolve, reject ) => {
  resolve()
}).then(() => {
  return new Promise((resove, reject ) => {
    throw 
    resolve('something')
  })
}) 

async function makePromise () {
  await Promise.resolve()
  throw new Error('BEEP BEEP')
  // return Promise.reject(new Error('some error'))
}

main().catch(error => console.log(error.stack))
