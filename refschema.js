var mongoose =require('mongoose');
Schema=mongoose.Schema;


var stateSchema=new mongoose.Schema({
    stateId:Number,
    name:String
})

var citySchema=new mongoose.Schema({
cityId:Number,
    cityName:String,
    stateRef:[{
    type:Schema.Types.ObjectId,ref:'StateModel' }]
    
})

var routeSchema=new mongoose.Schema({
    routeId:Number,
    fromCity:[{ type:Schema.Types.ObjectId , ref:'CityModel'}],
    
    toCity:[{ type:Schema.Types.ObjectId, ref:'CityModel'}],
    distance:Number
})

module.exports.StateModel= mongoose.model('StateModel',stateSchema);
module.exports.CityModel=mongoose.model('CityModel',citySchema);
module.exports.RouteModel=mongoose.model('RouteModel',routeSchema);