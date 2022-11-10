const User = require('../models/user.model')

exports.save =  async (data)=>{

    try {
        
        var new_user = new User(data);
        await new_user.save((err,result)=>{
            if(err) return err;
            return result;
        });


    } catch (error) {

        throw error;

    };


}

exports.findOne = async (query)=>{
    try {
        
    } catch (error) {
        throw error;
    }



}