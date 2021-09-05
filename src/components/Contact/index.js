import React, { Component } from "react";
import "./styles.scss";

class Contact extends Component {
  editButton = (event) => {
    event.preventDefault(); // do not rerender
    console.log("button clicked");
    this.props.enterEditMode(this.props.contact);
  };

  deleteButton = (event) => {
    event.preventDefault(); // do not rerender
    console.log("button clicked");
    this.props.deleteContact(this.props.contact);
  };

  render() {
    return (
      <div className="contactContainer">
        <div>
          <img width="40" src={this.props.contact.avatar} alt="avatar" />
        </div>
        <ul>
          <li>First name: {this.props.contact.firstName}</li>
          <li>Last name: {this.props.contact.lastName}</li>
          <li>Address: {this.props.contact.address}</li>
        </ul>
        <div className="buttonsContainer">
          <button onClick={this.editButton} id="editButton">Edit</button>
          <button onClick={this.deleteButton} id="deleteButton">Delete</button>
        </div>
      </div>
    );
  }
}

export default Contact;
