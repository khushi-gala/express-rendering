const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res)=>{
    const homepath = path.join(__dirname, 'home.html')
    res.sendFile(homepath)
})

app.get('/about', (req, res)=>{
    const aboutpath = path.join(__dirname, 'about.html')
    res.sendFile(aboutpath)
})

app.get('/contact', (req, res)=>{
    const contactpath = path.join(__dirname, 'contact.html')
    res.sendFile(contactpath)
})

app.listen(3000, ()=>{
    console.log('Running')
})