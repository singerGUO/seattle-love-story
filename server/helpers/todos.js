//back to the models
const db=require("../models");

exports.getTodos=function (req,res) {
   db.Todo.find()
       //todos can be changed
       .then(function (todos)  {
           res.json(todos)
       })
       .catch(function (err) {
           res.send(err)

       })
};

//body name,iscompleted,date
exports.createTodo=function (req,res) {
    db.Todo.create(req.body)
    //todos can be changed
        .then(function (whatever)  {
            res.status(201).json(whatever);
        })
        .catch(function (err) {
            res.send(err);

        })
};
exports.getTodo=function(req,res){
    db.Todo.findById(req.params.todoId)
        .then(function(whatever){
          res.json(whatever);
        })
.catch(function(err){
    res.send(err);

})
};

exports.updateTodo =function(req,res) {
                                                                    //respond with new version
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then(function (whatever) {
            res.json(whatever);
        })
        .catch(function (err) {
            res.send(err);
        })
};

exports.deleteTodo=function(req,res){
    db.Todo.remove({_id:req.params.todoId})
        .then(function(){
          res.json({message:'we deleted it'});

        })
        .catch(function(err){
            res.send(err);
        }


    )
};

                //exports is an object
module.exports=exports;