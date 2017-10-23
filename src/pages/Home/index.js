import { connect } from "react-redux";
import { fetchJedi, allJedi, isLoading, getError } from "../../store";
import Home from "./Home";

const mapStateToProps = state => ({
  jedi: allJedi(state),
  isLoading: isLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchJedi: () => dispatch(fetchJedi()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Home);
