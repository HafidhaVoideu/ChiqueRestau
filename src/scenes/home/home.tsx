import React from "react";
import "./home.css";
import { SubHeading } from "../../components";

import { images } from "../../constants";
const home = () => {
  return (
    <section className=" app__home  app__wrapper  section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new flavor" />
        <h1 className="app__home-title"> The key to fine Dinning </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </section>
  );
};

export default home;
