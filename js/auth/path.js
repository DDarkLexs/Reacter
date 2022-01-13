const fs = require('fs')
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

module.exports = {
    ask(){

        return new Promise((resolve,reject)=>{
       
            rl.question("Informe o caminho que deseja receber o arquivo: ",(answer)=>{

                resolve(answer)

            })
          

        })

        
        
    },
    
    async setPath(){
        return new Promise(async (resolve,reject)=>{

            const path = await this.ask()
            
            resolve(path)

        })

       // console.log(path)



    }

    





}