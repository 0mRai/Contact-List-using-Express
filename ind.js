const express=require('express');
//path is an inbuilt module in node
const path=require('path');
const port=8000;
//express() is done to include all the functionalities of the express server
const app=express();

app.set('view engine','ejs');

//joining two paths-the current directory and views folder
app.set('views', path.join(__dirname,'views'));

//nnow you dont need to specify the type of document to be read as express automatically detects it for us
//here it detects the h1 tag is html, you dont need to use different switch cases to specify file paths for different URL
//and here we return response using res.send and not by res.end
app.get('/', function(req, res){
    // console.log(req);
    // console.log(__dirname);
// res.send('<h1>Cool, it is running. Na?</h1>');

//whatevr file name we give here, it will go into the views folder and find that file and send it to the browser
//whenever you'll make any changes here in the title a new page will be rendered rather than one page getting edited
return res.render('home',{title:"I am flying"});
});


/*since we've included express framework its helping us in returning a response which in the 
earlier case we had to respond using the switch case manually coding all the things. here express has done that for us*/
//running the server
app.listen(port, function(err){
    if(err){
        console.log("error",err);
    }
    console.log("express is running without any problem on port:",port);

});