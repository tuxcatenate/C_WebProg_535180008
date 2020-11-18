//JS authentication router to show login page
const express = require('express'); 
const router = express.Router(); 
//add '/login' url subpath
router.get('/login', async (req, res) => { 
  res.render('pages/login'); 
}); 
//exports agar accessible/callable di file lain
module.exports = router; 

//user login validation
router.post('/login', async (req, res) => { 
    // get user input 
    // baca nilai yang di submit pada form html
    //req.body API holds parameters that are sent up from the client as part of a POST request. 
    const username = req.body.username; 
  
    const password = req.body.password; 
  
    if (username === "admin" && password === "admin") { 
    // TODO: implement sessions to check user is logged-in 
    //implement sessions to check user is logged-in
       req.session.user = "admin";
    // redirect to member area 
       res.redirect('/');  
    }  
    else { 
      // failure login error handling
      // render the login page with error information 
      // if user supplied worng username and passphrase
        res.render('pages/login', { layout : false, error: 'Wrong username or password.' }); 
    } 
  }); 

router.get('/login', async (req, res) => { 
// if the user has logged-in, redirect to index 
    if (req.session.user) { 
      res.redirect('/'); 
    } else { 
    /*beberapa halaman bisa saja menggunakan layout berbeda
    jadi parameter layout dapat di flag dengan 'false'*/
    res.render('pages/login',{ layout: false }); 
  } 
  }); 

//handling logout 
router.get('/logout', async (req, res) => { 
    // destroy all session   
    req.session.destroy(); 
    // redirect to login 
    res.redirect('/auth/login'); 

  }); 