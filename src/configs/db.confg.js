const mongoose = require('mongoose');

const connectDatabase = ()=>{

    mongoose.Promise = global.Promise;
    mongoose
        .connect(
           `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`, 
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,

        })
        .then(()=>{
            console.log("Successfully connected to database" )
        })
        .catch((err)=>{
            console.log(`Could not connect to the database. Exit now...${err}`);
            process.exit();
        })
};

module.exports =  {connectDatabase}
