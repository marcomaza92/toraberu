import styles from './page.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>Welcome!</h1>
        <p>Choose an option from the top navbar</p>
      </div>
    </div>
  );
}

export default Homepage;