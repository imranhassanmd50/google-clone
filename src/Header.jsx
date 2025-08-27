import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="about-container">
          <a>About</a>
          <a>Store</a>
        </div>
        <div className="profile-container">
          <a>Gmail</a>
          <a>Images</a>
          <a>
            <AppsIcon />
          </a>
          <a>
            <AccountCircleIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
