/**
 * Footer
 *
 * Pure component which does not need any access to redux to be displayed
 */

import React from "react";
import FILTER from "./VisibilityFilter";
import { FilterButton } from "./FilterButton";

const Footer = () => {
  return (
    <div>
      <FilterButton filter={FILTER.ALL} />
      <FilterButton filter={FILTER.COMPLETED} />
      <FilterButton filter={FILTER.PENDING} />
    </div>
  );
};

export default Footer;
