const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = ["Buy","Food", "Cook", "Eat",];



app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let day = today.toLocaleString("en-US", options);

  res.render('list', {
    kindofDay: day,
    newListItems: items
  });
});
app.post("/", function(req, res) {
  let item = req.body.newItem;
items.push(item);

  res.redirect("/");

})
app.listen(3000, function() {
  console.log("server is running on port 3000");
})
