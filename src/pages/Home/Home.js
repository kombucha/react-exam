import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import JediList from "../../components/JediList";
import Error from "../../components/Error";
import "./Home.css";

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchJedi();
  }

  render() {
    const { jedi, isLoading, error } = this.props;

    let content;
    if (isLoading) {
      content = <span>Loading</span>;
    } else if (error) {
      content = <Error message={error} />;
    } else {
      content = <JediList list={jedi} />;
    }

    return (
      <div className="Home">
        {content}
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
  error: PropTypes.string,
};

export default Home;
