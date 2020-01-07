module.exports = function(sequelize, DataTypes) {
  let Blog = sequelize.define("Blog", {
    author: DataTypes.STRING,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING
  });
  return Blog;
};
