const express = require('express');

const checkRouter = express.Router();

// Controllers
const {
    getAllRegister,
    getRegisterById,
    checkIn,
    checkOut,
    cancelCheck
} = require('../controllers/check.controller');

// Endpoints
checkRouter.get('/', getAllRegister);
checkRouter.get('/:id', getRegisterById);
checkRouter.post('/', checkIn);
checkRouter.patch('/:id', checkOut),
checkRouter.delete('/:id', cancelCheck);

module.exports = {
    checkRouter
}