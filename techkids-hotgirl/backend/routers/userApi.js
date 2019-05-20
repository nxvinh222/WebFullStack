const express = require('express');
const UserApiRouter = express.Router();


const UserModel = require('../models/user');


UserApiRouter.get('/', function(req, res){
    // res.send("Hello user api");
    UserModel.find({}, function(err, users){
        if (err) res.json({ success: false, err})
        else res.json({ success: true, data: users})
    })
})

UserApiRouter.get('/:id', function(req, res){
    let {id} = req.params;
    UserModel.findById(id, function(err, userFound){
        if(err) res.json({ success: false, err: "Not found" })
        else
        res.json({ success: true, data: userFound });
    })
})

UserApiRouter.put('/:id', function(req, res){
    let {id} = req.params;
    UserModel.findById(id,
    function(err, userFound){
        if (err) res.json({ success: false, err: ' Not found'})
        else if(!userFound) res.json({ success: false, err: ' Not found'})
        else{
            //ex: req.body = {name: 'a', age: 1}
            for (let key in req.body){
                let value = req.body[key];
                if (value !== null){
                    userFound[key] = value;
                }
            }

            userFound.save(function(err, userUpdated){
                if (err) res.json({ success: false, err})
                else res.json({ success: true, data: userUpdated}) 
            })
        }
    });
});


UserApiRouter.post('/', function(req, res){
    UserModel.create(req.body, function(err, createdUser){
        if (err) res.json({ success: false, err})
        else res.json({ success: true, data: createdUser}) 
    })
})

UserApiRouter.delete('/:id', function(req, res){
    let {id} = req.params;

    UserModel.findById(id, function(err, userFound){
        if (err) res.json({ success: false, err: "Not found"})
        else {
            UserModel.remove(function(err){
                if (err) res.json({ success: false, err})
                else res.json({ success: true})
            })
            
        } 
    })
})

module.exports = UserApiRouter;