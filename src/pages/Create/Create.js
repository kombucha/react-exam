import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import "./Create.css";

class Create extends PureComponent {
  state = { name: "", termsOfServicesOk: false };

  // NB: Could have used a helper library like https://github.com/christianalfoni/formsy-react
  _handleNameChange = ev => this.setState({ name: ev.target.value });
  _handleTermsOfServicesChange = ev => this.setState({ termsOfServicesOk: ev.target.checked });

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
    const { name, termsOfServicesOk } = this.state;
    return (
      <div className="Create">
        <form className="Create__form" onSubmit={this._handleSubmit}>
          <TextInput
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            required
            minLength={3}
            autoFocus
            onChange={this._handleNameChange}
          />
          <p>
            There is no emotion, there is peace. <br />
            There is no ignorance, there is knowledge.<br />
            There is no passion, there is serenity.<br />
            There is no chaos, there is harmony.<br />
            There is no death, there is the Force<br />
          </p>
          <label className="Create__terms" htmlFor="termsOfServices">
            i accept the jedi code
            <input
              type="checkbox"
              id="termsOfServices"
              name="termsOfServices"
              checked={termsOfServicesOk}
              onChange={this._handleTermsOfServicesChange}
            />
          </label>

          <div>
            <Button type="submit" disabled={!termsOfServicesOk}>
              Create
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  createJedi: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Create;
