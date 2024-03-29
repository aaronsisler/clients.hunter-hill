import React from "react";
import amenities from "../../content/amenities";

import styles from "./amenities-container.module.scss";

const AmenitiesContainer = () => (
  <div className={styles.amenitiesContainer}>
    <div className={styles.amenitiesContainer__header}>
      <h1 className={styles.amenitiesContainer__headerTitle}>Amenities</h1>
      <p>
        Living at Hunter Hill gives you perks you would never have living at
        home.
      </p>
    </div>
    <h2 className={styles.amenitiesContainer__secTitle}>What we provide</h2>
    <div className={styles.amenitiesContainer__list}>
      {amenities.map(({ content, title }, index) => (
        <section className={styles.amenitiesContainer__listItem} key={index}>
          <h3 className={styles.amenitiesContainer__listItemTitle}>{title}</h3>
          <p className={styles.amenitiesContainer__listItemContent}>
            {content}
          </p>
        </section>
      ))}
    </div>
  </div>
);

export default AmenitiesContainer;
