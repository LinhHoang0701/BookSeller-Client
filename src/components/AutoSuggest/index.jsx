import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import history from "../../history";

const AutoSuggest = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke, slug) => {
    setSearch(poke);
    setDisplay(false);
    history.push(`/product/${slug}`);
  };
  return (
    <>
      <div
        ref={wrapperRef}
        className="pt-2 pt-lg-0 col-12 order-4 col-sm-12 order-sm-4 col-md-12 order-md-4 col-lg-5 order-lg-2"
      >
        <input
          id="auto"
          className="react-autosuggest__input"
          onClick={() => setDisplay(!display)}
          placeholder="Type to search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {display && (
          <div className="autoContainer">
            {products
              .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <div
                    onClick={() => updatePokeDex(value.name, value.slug)}
                    className="option"
                    key={i}
                    tabIndex="0"
                  >
                    <span>{value.name}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default AutoSuggest;
