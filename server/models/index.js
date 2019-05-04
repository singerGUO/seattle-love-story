var mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/todo-api');
mongoose.Promise=Promise;
module.exports.Todo=require("./todo");