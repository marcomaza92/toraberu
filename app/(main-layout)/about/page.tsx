import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <section>
        <h2 className="test">All your beloved trips in one place</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa accusantium ratione voluptate est deleniti reprehenderit tempora cumque praesentium esse in! Quia vel nisi molestiae facere laudantium rerum placeat laboriosam?</p>
      </section>
      <section>
        <h2>Powered with _some_ AI</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa accusantium ratione voluptate est deleniti reprehenderit tempora cumque praesentium esse in! Quia vel nisi molestiae facere laudantium rerum placeat laboriosam?</p>
      </section>
      <section>
        <h2>Calendar connectivity on sight!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa accusantium ratione voluptate est deleniti reprehenderit tempora cumque praesentium esse in! Quia vel nisi molestiae facere laudantium rerum placeat laboriosam?</p>
      </section>
    </div>
  )
}

export default About;