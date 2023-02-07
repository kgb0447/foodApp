const cart = require("./cart.json")
const favorite = require("./favorite.json");
const orders = require("./orders.json")
const products = require("./products.json");
const restaurants = require("./restaurant.json")
const users = require("./users.json");


module.exports = () => ({
    cart,
    favorite,
    orders,
    products,
    restaurants,
    users
});
