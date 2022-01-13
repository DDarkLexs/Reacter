const path = require('path')
const fs = require('fs-extra')

const app = {
    dir:process.env.HOME,
    currentDir:process.env.USERNAME,
    getDirFiles(){
        
        return new Promise((resolve,reject) => {
            const dir = path.join(this.dir) 

            fs.readdir(this.dir,{encoding:'utf8',withFileTypes:true},(err,files)=>{


                if(err) reject(err)

  
         //console.log([0].s)
                    const item = []

                    files.forEach(async file => {
                
                       // console.log(`${file.name} = ${file.isDirectory()} - ${file.isFile()}`)
                       item.push({
                            name:file.name,
                            tipo:file.isFile()?'file':'dir',
                            icon:file.isFile()?'mdi-cloud-download':'mdi-folder-open',
                            isFile:file.isFile(),
                            isdir:file.isDirectory(),
                        })
                
            
                    
                 //   console.log(item)
                    
                })
                
                
                
                resolve({arquivos: item,dir: dir,currentDir: this.currentDir})


            })



        })


    },
    getDirFilesSeach(procura){
        return new Promise((resolve,reject) => {
            const dir = path.join(procura) 

            fs.readdir(dir,{encoding:'utf8',withFileTypes:true},(err,files)=>{

                if(err) reject(err)

                const item = []

                files.forEach(async file => {
                
                    // console.log(`${file.name} = ${file.isDirectory()} - ${file.isFile()}`)
                    item.push({
                         name:file.name,
                         tipo:file.isFile()?'file':'dir',
                         icon:file.isFile()?'mdi-cloud-download':'mdi-folder-open',
                         isFile:file.isFile(),
                         isdir:file.isDirectory(),
                     })
             
         
                 
                // console.log(item)
                 
             })
             
                
                resolve({arquivos:item,dir:dir,currentDir: this.currentDir})


            })



        })


    },
    getDirFilesSeachIn(procura,curDir){

        return new Promise((resolve,reject) => {

            const dir = path.join(procura) 

            fs.readdir(dir,{encoding:'utf8',withFileTypes:true},(err,files)=>{

                if(err) reject(err)

                const item = []

                files.forEach(async file => {
                
                    // console.log(`${file.name} = ${file.isDirectory()} - ${file.isFile()}`)
                    item.push({
                         name:file.name,
                         tipo:file.isFile()?'file':'dir',
                         icon:file.isFile()?'mdi-cloud-download':'mdi-folder-open',
                         isFile:file.isFile(),
                         isdir:file.isDirectory(),
                     })
             
         
                 
               //  console.log(item)
                 
                })
             
                
                resolve({arquivos:item,dir:dir,currentDir:curDir})


            })


   


        })


    },
    getItemInfo(info){
        return new Promise((resolve,reject) => {

            fs.stat(path.join(info),(err,stat)=>{

                if(err) reject(err)


                resolve(stat)

            })
        
        



        })



    },
    deleteItem(item){

        return new Promise((resolve,reject) => {

            



        })

    }


}

module.exports = app