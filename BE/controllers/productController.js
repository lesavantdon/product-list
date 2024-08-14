const Product = require('../models/product');

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.product);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const { category, price, query, page = 1 } = req.query;
        let filter = {};
        if (category) filter.category = category;
        if (query) filter.name = new RegExp(query, 'i');

        let sort = {};
        if (price === 'highest') sort.price = -1;
        if (price === 'lowest') sort.price = 1;

        const limit = 4;
        const products = await Product.find(filter)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit);

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.product);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
