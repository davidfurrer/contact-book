import React, { Component } from "react";
import "./styles.scss";
// import ImageUpload from "../ImageUpload/index";

class ContactEditForm extends Component {
  state = {
    id: this.props.contact["id"],
    firstName: "",
    lastName: "",
    address: "",
    avatar: "",
    edit: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleImage = (event) => {
    console.log("HANDLING IMAGE", event.target.files[0]);

    this.setState({
      avatar: URL.createObjectURL(event.target.files[0]),
    });
  };

  submitHandler = (event) => {
    event.preventDefault(); // do not rerender
    // console.log("submit handler props", this.props);
    // this.setState({ id: this.props.contact["id"] });
    console.log("submit handler state:", this.state);
    this.props.submitEditContact(this.state);
  };

  render() {
    return (
      <div className="FormEditContainer">
        <h3>Update Contact</h3>
        <form onSubmit={this.submitHandler}>
          <label>
            {" "}
            First Name:
            <input
              type="text"
              placeholder="Enter your First name"
              value={this.state.firstName}
              onChange={this.handleChange}
              name="firstName"
            />
          </label>
          <label>
            {" "}
            Last Name:
            <input
              type="text"
              placeholder="Enter your Last name"
              value={this.state.lastName}
              onChange={this.handleChange}
              name="lastName"
            />
          </label>
          <label>
            {" "}
            Address:
            <input
              type="text"
              placeholder="Enter your address"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
            />
          </label>
          <label>
            Profile picture:{" "}
            {/* semi controlled file upload b/c it uses onChange event */}
            <input type="file" onChange={this.handleImage} name="image" />
          </label>

          <input type="submit" value="Update Contact" />
        </form>
      </div>
    );
  }
}

export default ContactEditForm;
