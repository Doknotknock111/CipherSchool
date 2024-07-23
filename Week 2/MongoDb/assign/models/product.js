const mongoose = require('mongoose');
const Category = require('./category');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    quantity: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
