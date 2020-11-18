//handle request of '/'
//evaluate login succesfull or not ,next redirect user to another page
const express = require('express'); 
const router = express.Router(); 
const session = require('express-session'); 
router.get('/', async (req, res) => { 
// check user session 
if (!req.session.user) { 
    res.redirect('/auth/login'); 
} 
else { 
    res.send('ok'); 
} 

}); 

module.exports = router; 