import { useRef, useState } from "react";
import {
  FaUser,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaTags,
  FaQuestionCircle,
} from "react-icons/fa";
import "./Navbar.css";
import MyImage from "./images/zippy.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };
  const navigate = useNavigate();
  const handleSigninClick = () => {
    navigate('/login');
  };

  return (
    <header>
      <div>
        <img className="img-logo" src={MyImage} alt="logo" />
      </div>

      <nav ref={navRef}>
        {showSearchBar ? (
          <div className="search-bar">
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search..."
            />
            <button>
              <FaSearch />
            </button>
          </div>
        ) : (
          <>
            <button className="btn" type="buton" onClick={handleSearchClick}>
              <FaSearch /> <p>Search</p>
            </button>
            <button className="btn" type="buton">
              <FaTags /> <p>Offers</p>
            </button>
            <button className="btn" type="buton">
              <FaQuestionCircle />
              <p>Help</p>
            </button>
          </>
        )}

        <button className="btn" type="buton" onClick={handleSigninClick}>
          <FaUser />
          <p>Sign In</p>
        </button>
        <button className="btn" type="buton">
          <FaShoppingCart />
          <p>Cart</p>
        </button>
        <div className="options-bar">
          <button>
            <FaHome />
          </button>
          <button className="search-btn-res">
            <FaSearch />{" "}
          </button>
          <button>
            <FaShoppingCart />
          </button>
          <button>
            <FaTags />
          </button>
        </div>
      </nav>
      <button className="nav-btn" onClick={ handleSigninClick}>
        <FaUser />
      </button>
    </header>
  );
};

export default Navbar;
