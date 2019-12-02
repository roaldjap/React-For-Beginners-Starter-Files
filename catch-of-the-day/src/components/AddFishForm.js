import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // prevent submitting form
    event.preventDefault();

    // get the values for ref that was defined in the form
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };

    // Add fish to state
    this.props.addFish(fish);

    // clears out form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="input" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="number"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select
          type="input"
          name="status"
          ref={this.statusRef}
          placeholder="Status"
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="input"
          name="desc"
          ref={this.descRef}
          placeholder="Description"
        ></textarea>
        <input
          type="input"
          name="image"
          ref={this.imageRef}
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
