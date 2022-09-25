const express = require('express')
const router = express.Router()

const { responseError } = require('./../../utils/responseFormatter.utils')

router.get('/response-jwt', (_, res) => {
    res.status(400).json(responseError('Unauthorized'))
})

module.exports = router