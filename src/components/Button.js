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

const Button = ({ active, changeFilter, filter }) => {
  return (
    <button
      onClick={() => changeFilter(filter)}
      disabled={active}
    >
      {filter}
    </button>
  );
};

export default Button;
