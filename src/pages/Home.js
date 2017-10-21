import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Jedi from "../components/Jedi";
import "./Home.css";

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchJedi();
  }

  render() {
    const { jedi } = this.props;

    return (
      <div className="Home">
        <ul>
          {jedi.map(j => (
            <li key={j.id}>
              <Jedi jedi={j} />
            </li>
          ))}
        </ul>

        <Link to="/create">Create jedi</Link>
      </div>
    );
  }
}

Home.propTypes = {
  jedi: PropTypes.array,
  fetchJedi: PropTypes.func.isRequired,
};

export default Home;
