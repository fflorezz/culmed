import React from "react";
import PropTypes from "prop-types";

import StyledFilter from "./FilterDrop-styles";
import Icon from "./../icon/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setExploreFilter } from "../../../redux/slices/events";
import { mockOptions } from "../../../mockData";

const FilterDrop = ({ options = mockOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOption] = useState("Todos");
  const dispatch = useDispatch();

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  function selectOption(option) {
    setOption(option.title);
    dispatch(setExploreFilter(option.value));
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
            <p key={option.id} onClick={() => selectOption(option)}>
              {option.title}
            </p>
          ))}
        </div>
      )}
    </StyledFilter>
  );
};

FilterDrop.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};

export default FilterDrop;
