const db = require("../models");

module.exports = {
  postExampleApi: async function(req, res) {
    const dbBlog = await db.Blog.create(req.body);
    res.json(dbBlog);
  },
  api: function(app) {
    // REROUTE TO /BLOGS
    app.get("/", (req, res) => {
      res.redirect("/blogs");
    });

    // GET ROUTE FOR THE HOME PAGE WITH ALL THE BLOGS IN THE DB
    app.get("/blogs", (req, res) => {
      db.Blog.findAll({}).then(blogs => {
        res.render("index", { blogs: blogs });
      });
    });

    // CREATE ROUTE
    app.post("/blogs", (req, res) => {
      req.body.blog.body = req.sanitize(req.body.blog.body);
      db.Blog.create({
        author: req.body.blog.author,
        title: req.body.blog.title,
        image: req.body.blog.image,
        body: req.body.blog.body
      }).then(() => {
        res.redirect("/blogs");
      });
    });

    // NEW ROUTE FOR CREATING A NEW BLOG POST
    app.get("/blogs/new", (req, res) => {
      res.render("new");
    });
    //new route for logging in
    app.get("/login", (req, res) => {
      res.render("login");
    });
    //new route for signing up
    app.get("/signup", (req, res) => {
      res.render("signup");
    });

    // SHOW ROUTE
    app.get("/blogs/:id", (req, res) => {
      db.Blog.findOne({ where: { id: req.params.id } }).then(foundBlog => {
        res.render("show", { blog: foundBlog });
      });
    });

    // EDIT ROUTE
    app.get("/blogs/:id/edit", (req, res) => {
      db.Blog.findOne({ where: { id: req.params.id } }).then(foundBlog => {
        res.render("edit", { blog: foundBlog });
      });
    });

    // UPDATE ROUTE
    app.put("/blogs/:id", (req, res) => {
      req.body.blog.body = req.sanitize(req.body.blog.body);
      db.Blog.findOne({ where: { id: req.params.id } }).then(updatedBlog => {
        updatedBlog
          .update({
            author: req.body.blog.author,
            title: req.body.blog.title,
            image: req.body.blog.image,
            body: req.body.blog.body
          })
          .then(() => {
            res.redirect("/blogs");
          });
      });
    });

    // DESTROY ROUTE
    app.delete("/blogs/:id", (req, res) => {
      db.Blog.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/");
      });
    });
  }
};
