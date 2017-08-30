var express=require('express'),
	mongoose=require('mongoose'),
	app=express	();

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/client/views/index.html');
});

app.use('/js',express.static(__dirname+'/client/js'));

app.post('/api/employees',module.exports.create=function(req,res){
	
});

var Schema = mongoose.Schema;
var employeeSchema=new Schema({name:String});

mongoose.model('employees',employeeSchema);

app.get('/employees',function(req,res)
{
	mongoose.model('employees').find(function(err,employees){
		res.send(employees);
	});
})

app.listen(3000,function(req,res){
	console.log('Im listening');	
});