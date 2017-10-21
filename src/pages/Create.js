import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Create extends PureComponent {
  state = { name: "" };

  _handleNameChange = ev => this.setState({ name: ev.target.value });

  _handleSubmit = ev => {
    const { history } = this.props;
    ev.preventDefault();
    this.props
      .createJedi(this.state)
      .then(() => {
        history.push("/");
      })
      .catch(err => {
        alert(`Failed to create jedi: ${err}`);
      });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="Create">
        <form onSubmit={this._handleSubmit}>
          <input type="text" value={name} onChange={this._handleNameChange} />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  createJedi: PropTypes.func.isRequired,
};

export default Create;
