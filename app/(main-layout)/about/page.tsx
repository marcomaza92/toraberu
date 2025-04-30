import styles from "./page.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <h1>{`What's this`}</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          All your beloved trips in one place
        </h2>
        <p className={styles.sectionContent}>
          Plan and organize your travel destinations effortlessly. Save places
          you want to visit and schedule them for future trips. Never lose track
          of your travel wishlist again!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Powered with <em>some</em> AI
        </h2>
        <p className={styles.sectionContent}>
          {`Search for any place worldwide using Google's extensive database
          and some AI systems. Get accurate location suggestions and save them
          to your personal collection with just a click.`}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Calendar connectivity on sight!</h2>
        <p className={styles.sectionContent}>
          Organize your visits by date, group them automatically, and keep track
          of your travel schedule. Perfect for planning short trips or extended
          adventures.
        </p>
      </section>
    </section>
  );
};

export default About;
