import React from "react";

import { images } from "../../constants";

type SubheadingProps = {
  title: string;
};
const SubHeading = ({ title }: SubheadingProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant"> {title}</p>
      <img src={images.spoon} alt="spoon-img" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
