import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import "./into.css";
const Intro = () => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);
  const refVed = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setIsPlayVideo(!isPlayVideo);
    if (isPlayVideo) refVed.current?.pause();
    else refVed.current?.play();
  };

  return (
    <section className="app__video">
      <video loop muted ref={refVed} controls={false}>
        <source src={meal} type="video/mp4" />
      </video>

      <div className="app__video-overlay  flex__center">
        <div
          className="app__video-overlay_circle  flex__center"
          onClick={handleVideo}
        >
          {isPlayVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
