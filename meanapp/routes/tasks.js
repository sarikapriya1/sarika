var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/insert', function(req, res, next){
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

     // databse Insert
db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

    });
    });
});





//display 


router.get('/display', function(req, res, next){
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

    db.collection('Persons', function (err, collection) {
        
         collection.find().toArray(function(err, tasks) {
            if(err) throw err;    
              
            //res.json(tasks);  
            res.send(tasks);       
        });
        
    });
                
  });
        
    });



module.exports = router;