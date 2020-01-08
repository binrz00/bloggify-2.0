const db = require("../models");
module.exports = {
  postBlogifyApi: async function(req, res) {
    const dbBlog = await db.Blog.create(req.body);
    res.json(dbBlog);
  },
  api: function(app) {
    // Get all blogs
    app.get("/api/blogs", function(req, res) {
      db.Blog.findAll({}).then(function(dbBlogs) {
        res.json(dbBlogs);
      });
    });
    // Get a blog
    app.get("/api/blogs/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Blog.findAll({ where: { id: req.params.id } }).then(function(dbBlogs) {
        console.log(dbBlogs);
        res.json(dbBlogs[0]);
      });
    });
    // Update a blog post
    app.put("/api/blogs/:id", function(req, res) {
      console.log({ id: req.params.id });
      db.Blog.update(
        {
          image: req.body.blog.image,
          title: req.body.blog.title,
          body: req.body.blog.body
        },
        { where: { id: req.params.id } }
      ).then(function(dbBlogs) {
        console.log(dbBlogs);
      });
    });
    // Create a new blog
    app.post("/api/blogs", function(req, res) {
      db.Blog.create(req.body.blog).then(function(dbBlogs) {
        console.log(dbBlogs);
        res.json(dbBlogs);
        res.redirect("/api/blogs");
      });
    });

    // Route the new blog

    app.get("/api/blogs/new", function(req, res) {
      res.render("new.html"); // path is likely going to need to change
    });

    // Create a route for the editing form
    app.get("/api/blogs/:id/edit", function(req, res) {
      db.Blog.findOne({ where: { id: req.params.id } }).then(function(dbBlogs) {
        console.log(dbBlogs);
        res.render("edit.html"); // path is likely going to need to change
      });
    });

    // Delete a blog by id
    app.delete("/api/blogs/:id", function(req, res) {
      db.Blog.destroy({ where: { id: req.params.id } }).then(function(dbBlog) {
        res.json(dbBlog);
      });
    });
  }
};
