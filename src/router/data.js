const express = require('express');
const router = express.Router();
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const pathDir = require('../controller/dir');
const { download } = require('../middleware/file')



/*

fs.readdir('C:/',{encoding:'utf8',withFileTypes:true},(err,files)=>{

    if(err) reject(err)

    //console.log([0].s)
    // files.forEach(async file => {

    //    // console.log(`${file.name} = ${file.isDirectory()} - ${file.isFile()}`)
    //     console.log({
    //         name:file.name,
    //         tipo:file.isFile()?'file':'dir'

    //     })

    // });
    


})
 */
router.get('/',async (req,res)=>{

    try {
        
     //   console.log(req)
        const package = await pathDir.getDirFiles()
      //  console.log(package)
        res.json(package)
        
    } catch (error) {
        
        throw error
        

    }
        
})

router.get('/search',async (req,res)=>{

    try {
        const procura = req.query.search 
      //  console.log(procura)
        const package = (await pathDir.getDirFilesSeach(procura))
       // console.log(package)
        res.json(package)
        
    } catch (error) {
        
        throw error
        

    }
        
})

router.get('/info',async (req,res)=>{

    try {
        const info = req.query.item
    //  console.log(info)
        const package = (await pathDir.getItemInfo(info))
       // console.log(package)
        res.json(package)
        
    } catch (error) {
        
        throw error
        

    }
        
})


router.get('/searchIn',async (req,res)=>{

    try {
        const procura = `${req.query.dir}/${req.query.search}`
        const package = (await pathDir.getDirFilesSeachIn(procura,req.query.search))
      //  console.log(package)
        res.json(package)
        
    } catch (error) {
        
        throw error
        

    }
        
})

router.get('/dirFile',(req,res,next)=>{


    console.log('Baixou')
    

    next()


},download)


module.exports = router
