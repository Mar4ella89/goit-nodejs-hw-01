const contacts = require("./contacts");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.table(contact);
      break;

    case "update":
        const updateContact = await contacts.updateById(id,{name, email, phone});
        console.table(updateContact);
        break;    

    case "add":
      const newContact = await contacts.addContact({name, email, phone});
      console.table(newContact);
      break;     

    case "remove":
      const deleteContact = await contacts.removeContact(id);
        console.table(deleteContact);
        break;    
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);