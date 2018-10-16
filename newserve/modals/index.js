var db=require('../db/db');
var Schema=db.Schema;
var userSchema=new Schema({
	phone:{
		type:Number
	},
	password:{
		type:String
	},
	nickname:{
		type:String
	},
	sex:{
		type:String,
		default:"男"
	},
	signature:{
		type:String,
		default:""
	},
	email:{
		type:String,
		default:[]
	},
	prov:{
		type:String,
		default:'北京'
	},
	city:{
		type:String,
		default:'北京'
	},
	requests:{
		type:Array

	}
});
module.exports = db.model('User',userSchema);