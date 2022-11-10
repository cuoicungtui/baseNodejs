const UserService = require('../services/user.service');
const redisClient = require('../configs/redis.confg');


exports.login  = async (req,res,next)=>{
    redisClient.SET("12",1231221);
}

exports.register = async(req,res,next)=>{

    try {

        var users =  UserService.save(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Succesfully user register" });

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });

    }


}