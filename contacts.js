const fs = require("fs/promises");
const path = require("path");

console.log(__dirname);

// const contactsPath = require(`${__dirname}./db/contacts.json`);
// const contactsPath = require(`./db/contacts.json`);

const listContacts = async () => {
  const data = await fs.readFile(`${__dirname}./db/contacts.json`, "utf-8");
  //   const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async () => {};

const removeContact = async () => {};

const addContact = async () => {};

module.exports = { listContacts, getContactById, removeContact, addContact };
