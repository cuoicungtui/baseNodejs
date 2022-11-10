const todoRouter= require('../routers/todo.routers');
const userRouter= require('../routers/user.routers');

function route(app){

    app.use('/todoRouter',todoRouter);
    app.use('/userRouter',userRouter);

}

module.exports = route
   
