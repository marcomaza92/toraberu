"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { Client, Databases, Query } from "appwrite";

const Homepage = () => {
  const collections = {
    places: "677f2d9a00065fe0c22b",
  };

  const fetchFromAppWrite = async () => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

    const databases = new Databases(client);

    const dataAppWrite = databases
      .listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        collections.places,
        [Query.select([])]
      )
      .then((data) => {
        console.log(data);
      });

    console.log("appwrite", dataAppWrite);
  };

  useEffect(() => {
    fetchFromAppWrite();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>Welcome!</h1>
        <p>Choose an option from the top navbar</p>
      </div>
    </div>
  );
};

export default Homepage;
