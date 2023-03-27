const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async () => {};

const removeContact = async () => {};

const addContact = async () => {};

module.exports = { listContacts, getContactById, removeContact, addContact };
