const Product = require('../models/product');

exports.getProductReviews = async (req, res) => {
    try {
        const product = await Product.findById(req.params.product);
        const page = req.query.page || 1;
        const limit = 4;
        const reviews = product.reviews.slice((page - 1) * limit, page * limit);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addProductReview = async (req, res) => {
    try {
        const product = await Product.findById(req.params.product);
        product.reviews.push(req.body);
        await product.save();
        res.status(201).json(product.reviews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { 'reviews._id': req.params.review },
            { $pull: { reviews: { _id: req.params.review } } }
        );
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
