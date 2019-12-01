import { CHANGE_VISIBILITY_FILTER } from "../actions/actionNames";
import FILTER from "../components/VisibilityFilter";

const initialState = FILTER.ALL;
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
