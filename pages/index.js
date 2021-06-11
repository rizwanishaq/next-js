import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import Project from "../components/Projects";
const projectData = [
  {
    title: "Portfolio",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    description: "Personal portfolio website",
    githubUrl: "https://github.com",
    sampleUrl: "abc.com",
  },
  {
    title: "Youtube Videos",
    skills: ["javaScript", "algorithm"],
    description: "Educational Contents",
    githubUrl: "",
    sampleUrl: "youtube.com",
  },
];

export default () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizwan Ishaq</title>
        <meta name="description" context="Rizwan Ishaq Website" />
      </Head>
      <div className={styles.navigation}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <div id="about" className={styles.identity}>
        <div className={styles.logoImage}>
          <Image src="/main.jpg" alt="my logo" width={100} height={100} />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>Rizwan Ishaq</div>
          <div className={styles.description}>Full Stack AI Engineer</div>
        </div>
      </div>
      <div id="skills" className={styles.skills}>
        <div className={styles.title}>Skills</div>
        <div className={styles.row}>
          <div className={styles.left}>Programming Languages</div>
          <div className={styles.right}>Javascript, Python, C++</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>FrontEnd</div>
          <div className={styles.right}>
            React.js, Next.js Html, CSS/SCSS, Vanilla javascript, jQuery
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Backend</div>
          <div className={styles.right}>Node.js, Express.js</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Data</div>
          <div className={styles.right}>
            Pandas, Redis, MongoDB, CouchBase, GraphQL
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>AWS</div>
          <div className={styles.right}>S3, RouteS3, Lambda, API Gateway</div>
        </div>
      </div>
      <div id="projects" className={styles.projects}>
        <div className={styles.title}>Projects</div>
        {projectData.map((data) => (
          <Project {...data} />
        ))}
      </div>
    </div>
  );
};
