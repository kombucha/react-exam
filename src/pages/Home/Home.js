import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import JediList from "../../components/JediList";
import "./Home.css";

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchJedi();
  }

  _renderLoader = () => <span>Loading</span>;

  render() {
    const { jedi, isLoading } = this.props;

    return (
      <div className="Home">
        {isLoading ? this._renderLoader() : <JediList list={jedi} />}
        <Link className="Home__create-link" to="/create">
          +
        </Link>
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
