/**
 * Filter button
 *
 * Links the redux store to the filter button component
 * This containers wraps the Button component with reduw behavior connected
 * to its props
 */

import { connect } from "react-redux";
// Button is a pure component that will be used by FilterButton 
import Button from "../components/Button";
import { changeFilter } from "../actions";

// ownProps contains the props of the Button component
// we use is to determine if the current button is active 
// depending on the state visibility filter
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

// we add the action dispatch on the changeFilter props of the Button component
const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Button);
