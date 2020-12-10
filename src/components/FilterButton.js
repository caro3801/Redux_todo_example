/**
 * Button component
 *
 * A pure component used to change filter type
 * The props (active and changeFilter) of this component as coming from
 * the container FilterButton which is connected to
 * the redux store. The filter props is a "classic" react props
 * (called ownProp when using mapStateToProps or mapDispatchToProps).
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../actions";

export const FilterButton = ({ filter }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.visibilityFilter);
  const active = filter === activeFilter;
  return (
    <button onClick={() => dispatch(changeFilter(filter))} disabled={active}>
      {filter}
    </button>
  );
};
