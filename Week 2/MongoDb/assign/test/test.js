const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');
const connectDB = require('../db');

chai.use(chaiHttp);

describe('MongoDB CRUD Operations', () => {
    before(async () => {
        await connectDB();
    });

    let userId;
    let productId;
    let categoryId;

    // Create test
    it('should create a user', async () => {
        const user = new User({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            country: 'USA'
        });
        const savedUser = await user.save();
        userId = savedUser._id;
        expect(savedUser).to.have.property('_id');
        expect(savedUser.name).to.equal('John Doe');
    });

    it('should create a category', async () => {
        const category = new Category({ categoryName: 'Electronics' });
        const savedCategory = await category.save();
        categoryId = savedCategory._id;
        expect(savedCategory).to.have.property('_id');
        expect(savedCategory.categoryName).to.equal('Electronics');
    });

    it('should create a product', async () => {
        const product = new Product({
            productName: 'Laptop',
            price: 1000,
            category: categoryId,
            quantity: 10
        });
        const savedProduct = await product.save();
        productId = savedProduct._id;
        expect(savedProduct).to.have.property('_id');
        expect(savedProduct.productName).to.equal('Laptop');
    });

    // Read test
    it('should read a user', async () => {
        const user = await User.findById(userId);
        expect(user).to.not.be.null;
        expect(user.name).to.equal('John Doe');
    });

    it('should read a product', async () => {
        const product = await Product.findById(productId).populate('category');
        expect(product).to.not.be.null;
        expect(product.productName).to.equal('Laptop');
    });

    it('should read categories', async () => {
        const categories = await Category.find();
        expect(categories).to.not.be.empty;
    });

    // Update test
    it('should update user country', async () => {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { country: 'Canada' },
            { new: true }
        );
        expect(updatedUser.country).to.equal('Canada');
    });

    it('should update product quantity', async () => {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { quantity: 20 },
            { new: true }
        );
        expect(updatedProduct.quantity).to.equal(20);
    });

    it('should update product price', async () => {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { price: 1200 },
            { new: true }
        );
        expect(updatedProduct.price).to.equal(1200);
    });

    // Delete test
    it('should delete a user', async () => {
        await User.findByIdAndDelete(userId);
        const user = await User.findById(userId);
        expect(user).to.be.null;
    });

    it('should delete a product', async () => {
        await Product.findByIdAndDelete(productId);
        const product = await Product.findById(productId);
        expect(product).to.be.null;
    });

    after(async () => {
        await mongoose.connection.db.dropDatabase();
        mongoose.connection.close();
    });
});
