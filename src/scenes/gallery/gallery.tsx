import React, { useRef, useState } from "react";
import { SubHeading } from "../../components";
import "./gallery.css";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { images } from "../../constants";
const gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = (scroll: string) => {
    if (ref.current) {
      if (scroll === "left") {
        ref.current.scrollLeft -= 300;
      } else {
        ref.current.scrollLeft += 300;
      }
    }
  };

  return (
    <section className="app__gallery  flex__center section__padding">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      {/* <div className="test" /> */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={ref}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default gallery;
