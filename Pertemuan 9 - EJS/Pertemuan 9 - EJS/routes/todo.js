//ToDo page JS router

//import yang perlu aja
const express = require('express'); 
const router = express.Router(); 

router.get('/', async (req, res) => { 
  //res.render('pages/todo'); 
  res.render('pages/todo', { tasks: req.session.tasks }); 
}); 

module.exports = router

router.post('/add', async (req, res) => { 
    // handler task operation pada ToDo
    //terdapat beberapa operasi yang dapat dilakukan user kepada todolist ini seperti:
    /*
        - Add operation
        - Delete operation
    */
    // if there's no tasks in the session, create one 
    if (!req.session.tasks) { 
      req.session.tasks = []; //untuk menampung task yang telah diinput user
    } 
  
    // add new task 
    const newTask = req.body.taskName; 
    req.session.tasks.push(newTask);
    res.redirect('/todo'); 
  }); 


//handle task removal request and deletion method
router.post('/done/:index', async (req, res) => { 

    // get the index of the task to be deleted 
    const index = req.params.index 

    // only delete if there's that task 
    if (req.session.tasks && index < req.session.tasks.length) { 
      req.session.tasks.splice(index, 1); 
    } 
    //ketika operasi selesai
    res.redirect('/todo');
  }); 

