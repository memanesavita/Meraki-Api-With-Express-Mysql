const express=require("express")
const { postdata, get_method, putdata, delete_data} = require("../controller/logic")
const router=express.Router()

router.post('/postdata',postdata)
router.get('/getdata',get_method)
router.put('/putdata/:id',putdata)
router.delete('/delete_data/:id',delete_data)

module.exports=router