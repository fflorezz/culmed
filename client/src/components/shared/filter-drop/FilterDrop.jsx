import React from "react";
import PropTypes from "prop-types";

import StyledFilter from "./FilterDrop-styles";
import Icon from "./../icon/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setExploreFilter } from "../../../redux/slices/events";

const mockOptions = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Cine" },
  { id: 2, name: "Teatro" },
  { id: 3, name: "Danza" },
  { id: 4, name: "Música" },
];

const FilterDrop = ({ options = mockOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOption] = useState("Todos");
  const dispatch = useDispatch();

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  function selectOption(option) {
    setOption(option);
    dispatch(setExploreFilter(option));
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
  options: PropTypes.arrayOf(PropTypes.object),
};

export default FilterDrop;
