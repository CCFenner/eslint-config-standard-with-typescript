async function main () {
  return makePromise()
}

async function makePromise () {
  await Promise.resolve()
  // throw new Error('BEEP BEEP')
  return Promise.reject(new Error('some error'))
}

main().catch(error => console.log(error.stack))
