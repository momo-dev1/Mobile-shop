const slugify = require('slugify');
const asyncHnadler = require('express-async-handler');
const Category = require("../models/category")

/*
    @desc    Get list of all categories
    @route   GET /api/v1/categories
    @access  GET Public
*/
const getAllCategories = asyncHnadler(async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json({ results: getAllCategories.length, data: categories })
})

/*
    @desc    Create  category
    @route   Post    /api/v1/categories
    @access  GET     Private
*/
const createCategory = asyncHnadler(async (req, res) => {
    const { name } = req.body
    const category = await Category.create({ name, slug: slugify(name) })
    res.status(200).json({ data: category })
})
module.exports = { getAllCategories, createCategory }