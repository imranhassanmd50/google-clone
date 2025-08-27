import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

const Search = () => {
  const navigate = useNavigate();
  const { term, setTerm } = useContext(SearchContext);
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <img src="/google_1.png" width="500px" />
          <div className="search-items">
            <SearchIcon />
            <input
              type="text"
              id="search-box"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <MicIcon />
          </div>
          <div className="btn-container">
            <Button id="search-btn" type="submit">
              Google Search
            </Button>
            <Button id="search-btn">I'm Feeling Lucky</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
