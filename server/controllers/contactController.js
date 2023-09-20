const Contact = require('../models/Contact');

const contactController = {
  // Create a new contact
  createContact: (req, res) => {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });

    newContact.create((error, id) => {
      if (error) {
        return res.status(500).json({ error: 'Error creating contact' });
      }
      res.status(201).json({ message: 'Contact created successfully', id });
    });
  },

  // Retrieve all contacts
  getAllContacts: (req, res) => {
    Contact.getAll((error, contacts) => {
      if (error) {
        return res.status(500).json({ error: 'Error retrieving contacts' });
      }
      res.status(200).json({ contacts });
    });
  },

  // Retrieve a contact by ID
  getContactById: (req, res) => {
    const { id } = req.params;

    Contact.getById(id, (error, contact) => {
      if (error) {
        return res.status(500).json({ error: 'Error retrieving contact' });
      }
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json({ contact });
    });
  },

  // Update a contact by ID
  updateContact: (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const updatedContact = new Contact({ name, email, phone });

    updatedContact.update(id, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error updating contact' });
      }
      if (result === 'Contact not found') {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json({ message: 'Contact updated successfully' });
    });
  },

  // Delete a contact by ID
  deleteContact: (req, res) => {
    const { id } = req.params;

    Contact.deleteById(id, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error deleting contact' });
      }
      if (result === 'Contact not found') {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json({ message: 'Contact deleted successfully' });
    });
  },
};

module.exports = contactController;
