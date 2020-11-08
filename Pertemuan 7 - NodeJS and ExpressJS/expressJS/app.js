const express = require('express')


const app = express()


express().listen('3000',()=> {
    console.log("server ini berjalan")
})
