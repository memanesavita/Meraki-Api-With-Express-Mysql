var knex=require('../model/connection')
var meraki_data=require('../controller/course.json')
const bodyparser=require("body-parser")

// app.use(bodyparser.urlencoded({extended:true}))

const get_method=(req,res)=>{
    res.json(meraki_data)
}


const postdata=(req,res)=>{
    const data={
        id: req.params.id,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available
    }

    knex('meraki_project').insert(data).then(()=>{
        // fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"data post successfully"})
        // console.log(data)
    }).catch((err)=>{
        console.log("Data does not inserted")
    })
}


const putdata=(req,res)=>{
    knex.from("meraki_project")
    .where("id","=",req.params.id)
    .update({id:req.body.id ,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.body.lang_available
    })
    .then(()=>{
        console.log("update succesfully")
        res.send({massage:"data put successfully"})
    })
    .catch((err)=>{
        console.log(err)
    });
}





const delete_data=(req,res)=>{
    knex.delete("*").from("meraki_project").where("id","=",req.params.id)
    .then((data)=>{
        res.send({massage:"delete succesfully",data})
    })
    .catch((err)=>{
        res.send({massage:"data delete"})
    })
}




module.exports={get_method,postdata,putdata,delete_data}