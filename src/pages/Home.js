import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Jedi from "../components/Jedi";
import "./Home.css";

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchJedi();
  }

  _renderLoader = () => <span>Loading</span>;

  _renderJediList = jedi => {
    return (
      <ul>
        {jedi.map(j => (
          <li key={j.id}>
            <Jedi jedi={j} />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { jedi, isLoading } = this.props;

    return (
      <div className="Home">
        {isLoading ? this._renderLoader() : this._renderJediList(jedi)}
        <Link to="/create">Create jedi</Link>
      </div>
    );
  }
}

Home.propTypes = {
  jedi: PropTypes.array,
  fetchJedi: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
