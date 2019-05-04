
//main
var express= require('express'),
    app=express(),
    port=process.env.PORT||8080,
    bodyParser=require('body-parser');

var todoRoutes= require("./routes/todos");
//I want json to be used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//handeling specific routes from get
app.get('/',function(req,res){
    res.send("Hello from routes");
});

//get post put..
app.use('/api/todos',todoRoutes);


app.listen(port,function () {
    console.log("API is RUNNING ON PORT "+8080
    );
});
