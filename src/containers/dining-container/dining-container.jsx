import React from "react";
// import Image from "../../atoms/image";
// import { getCdnUrl } from "../../utils";

import "./dining-container.scss";

// const CDN_URL = getCdnUrl("/dining");

// const splashImage = {
//   altText: "Dining hall with tables and chairs",
//   src: `${CDN_URL}/dining-container.jpg`
// };

const DiningContainer = () => (
  <div className="dining-container">
    {/* <Image className="dining-container__splash-image" {...splashImage} /> */}
    <div className="dining-container__content">
      <h1 className="dining-container__title">Home-cooked meals every day</h1>
      <p>
        We recognize that diet is one of the most important aspects of a
        senior's life. We focus on from-scratch cooking using fine ingredients
        that favor natural herbs and spices, as well as many local and fresh
        ingredients to serve our residents delicious and well-balanced meals
        each day. We want dining to continue to be a pleasurable, rich part of
        every resident's day.
      </p>
    </div>
  </div>
);

export default DiningContainer;
