const express = require('express');
const ejs = require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
const app =  express()
const PORT = 3000


app.set('view engine', 'ejs')
app.use(expressEjsLayouts)

app.get('/',(req,res)=>{
    const template = {
        title : "online Shop",
        layout: 'partials/main.ejs'
    }

    res.render('index',template)
})

app.get('/features',(req,res)=>{
    const template = {
        title : "Halaman features",
        layout: 'partials/main.ejs'
    }

    res.render('./features',template)
})

app.get('/pricing',(req,res)=>{
    const template = {
        title : "pricing",
        layout: 'partials/main.ejs'
    }

    res.render('pricing',template)
})

app.use('/',(req,res)=>{
    res.status(404)
    res.send('<h1>Error Not Found :)</h1>')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})