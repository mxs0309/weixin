var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/vue');
mongoose.connection.on('open',function(){
	console.log('vue数据库连接成功');
});
module.exports=mongoose;