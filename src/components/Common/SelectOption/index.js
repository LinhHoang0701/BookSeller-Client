/**
 *
 * SelectOption
 *
 */

import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./index.css";

const SelectOption = (props) => {
  const { options, onChange } = props;

  const animatedComponents = makeAnimated();
  return (
    <div className="select-box">
      <Select
        options={options}
        onChange={onChange}
        defaultValue={options[0]}
        components={animatedComponents}
      />
    </div>
  );
};

export default SelectOption;
