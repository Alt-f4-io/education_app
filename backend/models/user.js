const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
})

userSchema.method.generateAuthToken = function () {
    const token= jwt.sign({_id:this_id}, process.env.JWTPRIVATEKEY)
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        firstName: passwordComplexity.required().label("First Name"),
    })
    return schema.validate(data)
}

module.exports = {User,validate}