import { connect } from "react-redux";
import { createJedi } from "../store";
import Create from "./Create";

const mapDispatchToProps = dispatch => ({
  createJedi: jedi => dispatch(createJedi(jedi)),
});

const enhance = connect(null, mapDispatchToProps);

export default enhance(Create);
