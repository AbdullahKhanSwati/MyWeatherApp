const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port  = process.env.PORT || 3000;
//path of index.html

const staticpath = path.join(__dirname,'../public');
const pathviews = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partials');

//views folder path
app.set('view engine','hbs');
app.set('views',pathviews);

hbs.registerPartials(partialpath);
app.use(express.static(staticpath));

//registering partial folder

//routing
app.get('/',(req,res)=>{
    res.render('index');

})
app.get('/about',(req,res)=>{
    res.render('about');
    
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})


app.get('/about/*',(req,res)=>{
    res.render('404error');


})
app.get('weather/*',(req,res)=>{
    res.render('404error');


})

app.get('/*',(req,res)=>{
    res.render('404error');


})
app.listen(port,()=>{
    console.log("listening at port 3000");
})