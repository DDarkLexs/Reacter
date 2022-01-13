const fs = require('fs')
const path = require('path')


module.exports  = {

    download(req,res){
    
      //  console.log(data)
      const data = req.query
      res.download(`${data.dir}/${data.file}`)
    // console.log(req.query)
    
          

    }



}


/* 
{
  file: '241238443_407786767589912_759138219145756741_n.jpg',
  dir: 'C:/Users/Antonio Lugogo/Desktop/arquivos'
}



*/

/* ola mundo */