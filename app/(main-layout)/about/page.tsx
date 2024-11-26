import styles from './page.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>What&apos;s this?</h1>
      
      <section className={styles.section}>
        <h2>All your beloved trips in one place</h2>
        <p>Plan and organize your travel destinations effortlessly. Save places you want to visit and schedule them for future trips. Never lose track of your travel wishlist again!</p>
      </section>

      <section className={styles.section}>
        <h2>Powered with <em>some</em> AI</h2>
        <p>Search for any place worldwide using Google&apos;s extensive database and some AI systems. Get accurate location suggestions and save them to your personal collection with just a click.</p>
      </section>

      <section className={styles.section}>
        <h2>Calendar connectivity on sight!</h2>
        <p>Organize your visits by date, group them automatically, and keep track of your travel schedule. Perfect for planning short trips or extended adventures.</p>
      </section>
    </div>
  );
};

export default About;