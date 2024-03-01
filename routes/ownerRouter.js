const express = require('express');
const OwnerController = require('../controllers/Owner.controller');

const ownerRouter = express.Router();

ownerRouter.post('/', OwnerController.createOne);
ownerRouter.put('/:ownerId', OwnerController.updateOne);
ownerRouter.get('/', OwnerController.getAll);
ownerRouter.get('/:ownerId', OwnerController.getOne);
ownerRouter.delete('/:ownerId', OwnerController.deleteOne);

ownerRouter.patch('/:ownerId/:catId', OwnerController.addCatToOwner);

module.exports = ownerRouter;