const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],
        unique: [true, ' name must be unique'],
        minlength: [3, 'name must be at least 3 characters long'],
        maxlength: [32, 'name must be less than 50 characters long']
    },
    slug: {
        type: String,
        lowercase: true,
    },


}, { timestamps: true });


module.exports = model('Category', CategorySchema);