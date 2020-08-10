import React from "react";
import PropTypes from "prop-types";

import StyledFilter from "./FilterDrop-styles";
import Icon from "./../icon/Icon";
import { useState } from "react";

const FilterDrop = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOption] = useState("Todos");

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  function selectOption(option) {
    setOption(option);
    toggleFilter();
  }
  return (
    <StyledFilter isOpen={isOpen}>
      <div className="select" onClick={toggleFilter}>
        <p>{optionSelected}</p>
        <Icon type="arrow" />
      </div>
      {isOpen && (
        <div className="options">
          {options.map(option => (
            <p key={option.id} onClick={() => selectOption(option.name)}>
              {option.name}
            </p>
          ))}
        </div>
      )}
    </StyledFilter>
  );
};

FilterDrop.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterDrop;
