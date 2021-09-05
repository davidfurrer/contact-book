import React, { Component } from "react";
import Contact from "../Contact/index";
import ContactForm from "../ContactForm/index";
import ContactEditForm from "../ContactEditForm/index";
import { uuid } from "uuidv4";
import "./styles.scss";

class ContactBook extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        firstName: "David",
        lastName: "Furrer",
        address: "Zurich",
        avatar: "./assets/alber.png",
        edit: false,
      },
      {
        id: uuid(),
        firstName: "Adrian",
        lastName: "Molzen",
        address: "Zurich",
        avatar: "./assets/jennifer.png",
        edit: false,
      },
    ],
  };

  submitContact = (newContact) => {
    // need to logic to check if contact already exists (otherwise duplicate id)
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  getIndexFromId = (id) => {
    let indexContactsArray;

    for (let index = 0; index < this.state.contacts.length; index++) {
      if (this.state.contacts[index]["id"] === id) {
        indexContactsArray = index;
      }
    }
    return indexContactsArray;
  };

  submitEditContact = (newContact) => {
    let indexContactsArray = this.getIndexFromId(newContact["id"]);

    let contacts = [...this.state.contacts];
    contacts[indexContactsArray] = newContact;

    this.setState({ contacts: contacts });
    console.log(this.state);
  };

  enterEditMode = (contactToUpdate) => {
    console.log("entering edit mode");
    let indexContactsArray = this.getIndexFromId(contactToUpdate["id"]);

    let contacts = [...this.state.contacts];
    contacts[indexContactsArray]["edit"] = !contactToUpdate["edit"];

    this.setState({ contacts: contacts });
  };

  deleteContact = (contactToDelete) => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(
      (contact) => contact.id !== contactToDelete["id"]
    );
    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div className="contactsContainer">
        {this.state.contacts.map((contact) => {
          return (
            <div className="contactContainer">
              <Contact
                key={contact.id}
                contact={contact}
                enterEditMode={this.enterEditMode}
                deleteContact={this.deleteContact}
              />
              {contact.edit && (
                <ContactEditForm
                  key={contact.id}
                  contact={contact}
                  submitEditContact={this.submitEditContact}
                />
              )}
            </div>
          );
        })}
        <ContactForm key="one" submitContact={this.submitContact} />
      </div>
    );
  }
}

export default ContactBook;
