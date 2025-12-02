import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("object", "root", "softsuave", 
    { dialect: "mysql" }
);
// User
const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});
// Profile (1:1 with User)
const Profile = sequelize.define("Profile", {
  bio: DataTypes.STRING,
  address: DataTypes.STRING,
});
// Product (many products can belong to a user)
const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
});
// Order (a user can have many orders)
const Order = sequelize.define("Order", {
  total: DataTypes.FLOAT,
});
// OrderItem (join table for many-to-many Order <-> Product)
const OrderItem = sequelize.define("OrderItem", {
  quantity: DataTypes.INTEGER,
});
// 1:1 User ↔ Profile
User.hasOne(Profile, { foreignKey: "userId" });
Profile.belongsTo(User);
// 1:N User ↔ Product
User.hasMany(Product, { foreignKey: "userId"});
Product.belongsTo(User);
// 1:N User ↔ Order
User.hasMany(Order, { foreignKey: "userId"});
Order.belongsTo(User);
// M:N Order ↔ Product through OrderItem
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

export { sequelize, User, Profile, Product, Order, OrderItem };
