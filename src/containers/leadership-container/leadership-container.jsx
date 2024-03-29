import React from "react";
import TeamMember from "../../components/team-member";
import leadership from "../../content/leadership";

import styles from "./leadership-container.module.scss";

const LeadershipContainer = () => (
  <div className={styles.leadershipContainer}>
    <div className={styles.leadershipContainer__content}>
      <h1 className={styles.leadershipContainer__title}>
        Getting to know your team
      </h1>
      <p>
        Your family member seeing a familiar face each day is one of the joys of
        living at Hunter Hill.
      </p>
      <div className={styles.leadershipContainer__teamMembers}>
        {leadership.map((teamMember, index) => (
          <React.Fragment key={index}>
            <TeamMember key={index} {...teamMember} />
            {index !== leadership.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default LeadershipContainer;
