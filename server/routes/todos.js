var express=require('express');
var router=express.Router();
const helpers=require("../helpers/todos");
//var db=require("../models");

// router.get('/',function (req,res) {
//    db.Todo.find()
//        //todos can be changed
//        .then(function (todos)  {
//            res.json(todos)
//        })
//        .catch(function (err) {
//            res.send(err)
//
//        })
// });

// router.post('/',function(req,res){
//     res.send("This is the post Route");
// } );
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports=router;