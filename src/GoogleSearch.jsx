import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./GoogleSearch.css";
import { SearchContext } from "./SearchContext";
import { useNavigate } from "react-router-dom";
import { API_KEY, SEARCH_KEY } from "./constant";

const GoogleSearch = () => {
  const [searchData, setSearchData] = useState();
  const navigate = useNavigate();
  const { term, setTerm } = useContext(SearchContext);
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_KEY}&q=${term}`;
  const handleLogo = () => {
    navigate("/");
  };
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setSearchData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSearch}>
          <div className="search-header">
            <img
              src="/google_1.png"
              alt="google"
              id="google-logo"
              onClick={handleLogo}
            />
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
          </div>
        </form>
        <div className="tags-container">
          <p style={{ textDecoration: "underline" }}>All</p>
          <p>Images</p>
          <p>News</p>
          <p>Shopping</p>
          <p>Videos</p>
        </div>
      </div>
      <hr />
      {term &&
        searchData?.items?.map((item, index) => {
          return (
            <div key={index} className="search-results">
              <div className="search-link">
                <a href={item?.link} target="_blank" rel="noopener noreferrer">
                  {item?.pagemap?.cse_image?.length > 0 && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      className="search-image"
                    />
                  )}
                  {item.displayLink}
                </a>
                <MoreVertIcon />
              </div>
              <a href={item?.link} className="search-title" target="_blank">
                <h2>{item.title}</h2>
              </a>
              <p>{item?.snippet}</p>
            </div>
          );
        })}
    </>
  );
};

export default GoogleSearch;
