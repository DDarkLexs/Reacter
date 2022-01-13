const fs = require('fs')
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
      
      module.exports = {
          selectOpt(){

    return new Promise((resolve,reject)=>{
                  
        rl.question('Selecione a opção: \n1 - arquivo para Cliente baixar\n2 - Sair\n\nR:',(answer)=>{
            

            resolve(answer)
            

            
        })
        

        
    })
    
    
    
},
selected(i){
    console.clear()
    
    switch (i) {
        case 1:
            
            
            console.log('Baixar')
            break;
            case 2:
                
                console.log('Sair')
                break;
                
                default:
                    console.log('Operação desconhecida')
                    break;
                }
                
                
            },
            
    async option() {
    return new Promise(async (resolve,reject)=>{


        var i = await this.selectOpt()
        console.log(`${i} resolve`)
        this.selected(i)
        resolve()


    })
      
      
      


      
    }
    
    
    
    
    
    
}
} catch (error) {
    
    console.log(error)    

}