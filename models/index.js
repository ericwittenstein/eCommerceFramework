// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
	foreignKey: "id",
});

// Categories have many Products
Category.hasMany(Product, {
	foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
	through: {
		model: ProductTag,
	},
	as: "tag_of_product",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
	through: {
		model: ProductTag,
	},
	as: "product_tagged",
});

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
