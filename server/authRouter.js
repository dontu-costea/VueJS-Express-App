const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")

router.post('/registration', [
    check('email', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:15})
], controller.registration)
router.post('/login', controller.login)
router.get('/user',  controller.getUsers)

module.exports = router