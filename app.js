// const declaration
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();
const items = ["Buy","Food", "Cook", "Eat",];
const workItems = [];
console.log(date);
// static files
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"));
// templating engine
app.set('view engine', 'ejs');

// navigations
app.get("/", function(req, res) {
const current = date.getDate2();
  res.render('list', {listTitle: current,newListItems: items
  });
});
app.post("/", function(req, res) {

const item = req.body.newItem
if (req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
} else {
  items.push(item);
    res.redirect("/");
}
})
// Navigation from homepage/work route
app.get("/work" , function(req , res){
  res.render("list" , {listTitle: "Work List" , newListItems:workItems })
});
// About page
app.get("/about", function(req,res){
  res.render("about");
})


// Listening on port
app.listen(3000, function() {
  console.log("server is running on port 3000");
})
