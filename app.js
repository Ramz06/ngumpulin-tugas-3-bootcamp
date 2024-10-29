const express = require("express");
const app = express();
const port = 3001;

app.set("view engine", "hbs");

app.use("/assets/css", express.static("assets/css"));
app.use("/assets/img", express.static("assets/img"));
app.use("/assets/js", express.static("assets/js"));
app.use("/views", express.static("views"));

app.get("/", home)

app.get("/blogs", blogs);

app.get("/contact", contact);

app.get("/addBlogs", addBlogs);

app.get("/testimonial", testimonial);

function home(req, res) {
  res.render("index");
}

function blogs(req, res) {
  res.render("blogs");
}

function contact(req, res) {
  res.render("contact");
}

function addBlogs(req, res) {
  res.render("addBlogs");
}

function testimonial(req, res) {
  res.render("testimonial");
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
