const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define API routes for contacts
router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getAllContacts);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
