const router = require('express').Router()
const { getAllCategories } = require('../controllers/categories')



router.route('/').get(getAllCategories)

module.exports = router 