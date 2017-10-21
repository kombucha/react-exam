import { connect } from "react-redux";
import { fetchJedi, allJedi } from "../store";
import Home from "./Home";

const mapStateToProps = state => ({ jedi: allJedi(state) });

const mapDispatchToProps = dispatch => ({
  fetchJedi: () => dispatch(fetchJedi()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Home);
