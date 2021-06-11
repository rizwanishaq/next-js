import React from "react";
import styles from "./project.module.scss";

const Projects = ({ title, description, skills, githubUrl, sampleUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.links}>
        {sampleUrl && (
          <a className={styles.sampleUrl} href={sampleUrl}>
            Project Link{" "}
          </a>
        )}
        {githubUrl && (
          <a className={styles.github} href={githubUrl}>
            Github
          </a>
        )}
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
