const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'Savita@123',
        database:'meraki_data'
    }
})
knex.schema.hasTable('meraki_project').then(function(exists){
    if(!exists){
        return knex.schema.createTable('meraki_project',function(t){
        t.increments('id').primary();
        t.string('name', 255);
        t.string('logo', 255);
        t.string('notes', 255);
        t.string('days_to_complete', 255);
        t.string('short_description', 255);
        t.string('type', 255);
        t.string('course_type', 255);
        t.string('lang_available', 255);
        })
        .then(()=>{
            console.log("table created")
        }).catch(()=>{
            console.log("alredy created")
        })
    }
})


module.exports=knex