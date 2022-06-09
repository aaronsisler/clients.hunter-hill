import React from "react";

import styles from "./dining-container.module.scss";

const DiningContainer = () => (
  <div className={styles.diningContainer}>
    <div className={styles.diningContainer__content}>
      <h1 className={styles.diningContainer__title}>
        Home-cooked meals every day
      </h1>
      <p>
        We recognize that diet is one of the most important aspects of a
        senior&apos;s life. We focus on from-scratch cooking using fine
        ingredients that favor natural herbs and spices, as well as many local
        and fresh ingredients to serve our residents delicious and well-balanced
        meals each day. We want dining to continue to be a pleasurable, rich
        part of every resident&apos;s day.
      </p>
    </div>
  </div>
);

export default DiningContainer;
