import React from "react";

const Jedi = ({ jedi }) => (
  <div>
    Jedi: id: {jedi.id}
    name: {jedi.name}
  </div>
);

Jedi.propTypes = {};

export default Jedi;
