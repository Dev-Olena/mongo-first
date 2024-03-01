const {Cat} = require('../models/index.js');

module.exports.createOne = async(req, res, next) => {
    try {
        const {body} = req;
        const newCat = await Cat.create(body);
        res.status(201).send({data: {newCat}}); 
    } catch (error) {
        next(error)
    }
};

module.exports.getAll = async(req, res, next) => {
    try {
        const cats = await Cat.find({}).populate('owner');
        res.status(200).send({data: cats});  
    } catch (error) {
        next(error)
    }
};

module.exports.getOne = async(req, res, next) => {
    try {
        const {params: {catId}} = req;
        const oneCat = await Cat.findById(catId).populate('owner');
        res.status(200).send({data: oneCat})
    } catch (error) {
        next(error)
    }
};

module.exports.updateOne = async(req, res, next) => {
    try {
        const {body,  params: {catId}} = req;
        const updated = await Cat.findByIdAndUpdate(catId, body);
        res.status(200).send({data: updated})
    } catch (error) {
        next(error)
    }
    
};

module.exports.deleteOne = async(req, res, next) => {
    try {
        const {params: {catId}} = req;
        const deleted = await Cat.findByIdAndDelete(catId)
        res.status(204).send({data: deleted})
    } catch (error) {
        next(error)
    }
};