const TodoService = require('../services/todo.service')    

exports.FindTodo = async function (req, res, next) {   
    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;

    let {name,age}= req.query

    var query = '{';
    if(name) query+='"name":"'+name+'"';
    if(age) query+=',"age":"'+age+'"';
    query+='}';
    if(query[1]==',') query = '{'+ query.substring(2, query.length)  
    query = JSON.parse(query)
     
    try {
        var todos = await TodoService.FindTodo(req.body, page, limit)
        return res.status(200).json({ status: 200, data: todos, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
  //  console.log(query);

}

exports.addTodos = async function (req,res,nex){

    var{ name , age } = req.body;
    if(!name || !age){
        res.status(400).json({message : " add faile"});
    }else
        TodoService.addTodos(req.body)?res.status(200).json({message : "add succesfully"}) : res.status(400).json({message : " add faile"});

}

exports.test = async (req,res,nex)=>{

    conditions = req.body;
   
    TodoService.deleteOne(conditions)?res.status(200).json({message : "add succesfully"}) : res.status(400).json({message : " add faile"});
}

