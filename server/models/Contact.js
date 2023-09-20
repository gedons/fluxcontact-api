const pool = require('../config/db');

class Contact {
  constructor(contact) {
    this.name = contact.name;
    this.email = contact.email;
    this.phone = contact.phone;
  }

  // Create a new contact
  async create(callback) {
    const sql = 'INSERT INTO details (name, email, phone) VALUES (?, ?, ?)';
    const values = [this.name, this.email, this.phone];

    pool.query(sql, values, (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results.insertId);
    });
  }

  // Retrieve all contacts
  static getAll(callback) {
    const sql = 'SELECT * FROM details';

    pool.query(sql, (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results);
    });
  }

  // Retrieve a contact by ID
  static getById(id, callback) {
    const sql = 'SELECT * FROM details WHERE id = ?';
    const values = [id];

    pool.query(sql, values, (error, results) => {
      if (error) {
        return callback(error);
      }
      if (results.length === 0) {
        return callback({ message: 'Contact not found' }, null);
      }
      callback(null, results[0]);
    });
  }

  // Update a contact by ID
  async update(id, callback) {
    const sql = 'UPDATE details SET name = ?, email = ?, phone = ? WHERE id = ?';
    const values = [this.name, this.email, this.phone, id];

    pool.query(sql, values, (error, results) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows === 0) {
        return callback({ message: 'Contact not found' }, null);
      }
      callback(null, 'Contact updated successfully');
    });
  }

  // Delete a contact by ID
  static deleteById(id, callback) {
    const sql = 'DELETE FROM details WHERE id = ?';
    const values = [id];

    pool.query(sql, values, (error, results) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows === 0) {
        return callback({ message: 'Contact not found' }, null);
      }
      callback(null, 'Contact deleted successfully');
    });
  }
}

module.exports = Contact;
