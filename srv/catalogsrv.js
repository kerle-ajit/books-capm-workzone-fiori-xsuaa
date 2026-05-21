// const cds = require('@sap/cds');


module.exports = srv => {


    // const db= cds.db;

    // srv.before("CREATE","BooksSet",async(req)=>{
    //     if(req.data.price < 0){
    //         return req.error(400,"Price cannot be negative");
    //     }
    // });

    //  srv.after("UPDATE","BooksSet",async(req)=>{
    //     console.log("After Update Hook Triggered ",req.data.ID);
    // });

    // Read : SELECT * FROM Books
    // Create : INSERT INTO Books VALUES (..)
    // Update : UPDATE Books SET ... WHERE ...
    // Delete : DELETE FROM Books WHERE ...


    // READ 
    // srv.on("READ","BooksSet",async(req,res)=>{
    //     results = []

    //     results = await db.run(
    //         [SELECT.from(Books)]  //.where({ID:req.data.ID})
    //     )

    //     return results;
    // })

       // Before Creating and Updating for validations
    

    // CREATE
    srv.on("CREATE","BookSet",async(req,res)=>{
        result = []
        result =await db.run([
            INSERT.into(Books).entries(req.data)
        ])
        .then((resolve,reject)=>{
            if(resolve){
                return req.data;
            }else{
                return req.error(400,"Error while creating the book record");
            }
        })
        .catch((err)=>{
            return req.error(500,"Internal Server Error");
        })

        return result;
    })

 

    // UPDATE 
     srv.on("UPDATE","BookSet",async(req,res)=>{
        result = []
        result = await db.run([
            // INSERT.into(Books).entries(req.data)
            UPDATE(Books).set(req.data).where({ID:req.data.ID})
        ])
        .then((resolve,reject)=>{
            if(resolve){
                return req.data;
            }else{
                return req.error(400,"Error while Updating the book record");
            }
        })
        .catch((err)=>{
            return req.error(500,"Internal Server Error");
        })

        return result;
    })

    // DELETE
    srv.on("DELETE","BooksSet",async(req,res)=>{
        result = []
        result = await db.run([
            // INSERT.into(Books).entries(req.data)
            DELETE.from(Books).where({ID:req.data.ID})
        ])
        .then((resolve,reject)=>{
            if(resolve){
                return req.data;
            }else{
                return req.error(400,"Error while Deleting the book record");
            }
        })
        .catch((err)=>{
            return req.error(500,"Internal Server Error");
        })
        
        return result;
    })
};