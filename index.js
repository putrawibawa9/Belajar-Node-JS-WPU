// const { resolve } = require("path")
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan1 = ()=>{
  return new Promise((resolve,reject)=>{
    rl.question('masukan nama anda :',(nama)=>{
      resolve(nama)
    })
  })
}

pertanyaan1()