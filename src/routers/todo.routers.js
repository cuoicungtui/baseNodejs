const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo.controller');


router.get('/',TodoController.FindTodo);

router.post('/add_todo',TodoController.addTodos);

router.delete('/test_api',TodoController.test);

//router.delete('/apdate_todo',TodoDelete)

module.exports = router

// POST – Create: Tạo dữ liệu mới
// GET – Read: Lấy dữ liệu về
// PUT – Update: Cập nhật dữ liệu
// DELETE – Delete: Xóa dữ liệu
