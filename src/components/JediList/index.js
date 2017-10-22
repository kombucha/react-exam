import React from "react";
import PropTypes from "prop-types";
import { pure } from "recompose";

import "./JediList.css";

const JediList = ({ list }) => (
  <ul className="JediList">
    {list.map(jedi => (
      <li key={jedi.id} className="JediList__item">
        {jedi.name}
      </li>
    ))}
  </ul>
);

JediList.PropTypes = {
  list: PropTypes.array.isRequired,
};

JediList.defaultProps = {
  list: [],
};

export default pure(JediList);
