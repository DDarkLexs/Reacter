const check = require('./js/auth/path')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const fs = require('fs')
const ASCIIColorLog = require("ascii-color-log")
const ip = require("ip")
const log = new ASCIIColorLog()




async function init(){

const local = require('./formulario/caminho.json').local
const multer = require('multer');
const pasta = /* local// */ await check.setPath() || local
var upload = multer({dest:pasta})
const app = express()
//moeda



app.use(cors());
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.static('media'))


const dir = require('./src/router/data')
//console.log(dir)
app.use('/dir',dir)



// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));


app.post('/upload',upload.single('file'),middle,(req,res)=>{

  res.send(req.file)

})


function middle(req,res,next){

  // console.log(req.headers.origin)
   console.table(req.file)
  //console.log(req.file.mimetype)
  const i = req.file.mimetype.indexOf('/')
  const mime = req.file.mimetype.slice((i+1))
  fs.renameSync(path.join(req.file.path),path.join(`${pasta}/${req.file.originalname}`))

  

 

  next()

}




const PORT = 1112;

const sort = Math.floor(Math.random() * (6 - 1 + 1)) + 1

app.listen(PORT,async () => {


 
  console.clear()


  log.success(`============== Reacter ==============`)

  log.info(`Local: 127.0.0.1:${PORT}`)
  log.info(`Rede: ${ip.address()}:${PORT}`)
  log.success(`\nPasta de Destino: ${pasta}`)
  // console.log(app.listen())
}).address()


// 
// con.query(`commit;`,(err,query,campo)=>{
  
  //   if (err) {
    //     throw err
//   } else {
  
//   }

// })
}



init()

