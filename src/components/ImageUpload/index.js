import React from "react";

class ImageUpload extends React.Component {
  handleImage = (event) => {
    console.log("HANDLING IMAGE", event.target.files[0]);

    this.setState({
      image: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.image);

    const formData = new FormData();
    formData.append("image", this.state.image);

    console.log("formData", formData.get("image"));
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>File Uploading Examples</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Profile picture:{" "}
            {/* semi controlled file upload b/c it uses onChange event */}
            <input type="file" onChange={this.handleImage} name="image" />
          </label>
          <input type="submit" />
        </form>

        {this.state.image ? (
          <img
            src={URL.createObjectURL(this.state.image)}
            alt="whatever"
            width="200"
          />
        ) : null}

        {/* <img width="200" src="https://media.cntraveler.com/photos/57fea9ec8584f8cd20e65f15/16:9/w_2580,c_limit/Aerial-One&OnlyReethiRah-Maldives-CRHotel.jpg" alt="whatever" /> */}
      </div>
    );
  }
}

export default ImageUpload;
