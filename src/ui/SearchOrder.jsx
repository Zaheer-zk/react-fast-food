import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="my-2 rounded-md border-2 border-stone-300 p-1.5 shadow-xl focus:shadow-none"
        value={query}
        placeholder="Search your order #"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchOrder;
