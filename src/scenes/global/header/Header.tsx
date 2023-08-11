import React, { useState } from "react";
import "./header.css";
import { images } from "../../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu, MdRestaurant } from "react-icons/md";

const List = () => {
  return (
    <>
      <li className="p__opensans">
        <a href="#home">home</a>
      </li>
      <li className="p__opensans">
        <a href="#home">pages</a>
      </li>

      <li className="p__opensans">
        <a href="#home">Blog</a>
      </li>
      <li className="p__opensans">
        <a href="#home">Landing</a>
      </li>
      <li className="p__opensans">
        <a href="#home">contact us</a>
      </li>
    </>
  );
};

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="app__header">
      <div className="app__header-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__header-nav flex__center">
        <List />
      </ul>

      <div className="app__header-login">
        <a href="#login" className="p__opensans">
          Log in/Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <nav className="app__header-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          color="#fff"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setIsToggle(!isToggle)}
        />

        {isToggle && (
          <div className="app__header-smallscreen__overlay  flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="overlay__close"
              onClick={() => setIsToggle(!isToggle)}
            />
            <ul className="app__header-smallscreen-links ">
              <List />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
