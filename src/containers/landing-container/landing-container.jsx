import React from "react";
import { Image } from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import styles from "./landing-container.module.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  alt: "Outdoor picture of the facility",
  src: `${CDN_URL}/landing-container__splash.jpg`,
};

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Image
      className={styles.landingContainer__splashImage}
      alt={splashImage.alt}
      src={splashImage.src}
    />
    {/* <div className={styles.landingContainer__banner}>
    </div> */}
    <div className={styles.landingContainer__content}>
      <h1 className={styles.landingContainer__contentTitle}>
        Life is better at Hunter Hill
      </h1>
      <p>
        Located in the Atlantic coastal plain region of North Carolina, Hunter
        Hill of Rocky Mount is a licensed assisted living community. You will
        find days with fewer worries, more options, and a community that feels
        just like home. Find a sense of belonging in our community of friends
        by&nbsp;
        <Hyperlink href="/daily-life" title="learning more here." />
      </p>
    </div>
    <div className={styles.landingContainer__content}>
      <h2 className={styles.landingContainer__contentSecTitle}>
        Not sure where to begin?
      </h2>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones. We are here to help you understand
        what we can provide and recommend&nbsp;
        <Hyperlink href="/why-assisted-living" title="starting here." />
      </p>
    </div>
  </div>
);

export default LandingContainer;
