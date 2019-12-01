import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor() {
    super();
    // Only do this if you have React.Fragment
    this.myInput = React.createRef();
  }

  goToStore = event => {
    // Prvent from submitting
    event.preventDefault();
    // Get the text from the input
    const storeName = this.myInput.current.value;
    // Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        {/* react cannot return multiple siblings. so use <React.Fragment> Element */}

        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">
            Visit Store{" "}
            <span role="img" aria-label="house">
              🏠
            </span>
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
