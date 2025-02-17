"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import { Client, Databases, Query } from "appwrite";

const Homepage = () => {
  const [data, setData] = useState<any[]>([]);

  const collections = {
    places: "677f2d9a00065fe0c22b",
  };

  const fetchFromAppWrite = useCallback(async () => {
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
      .then((response) => {
        if (response && response.documents) setData(response.documents);
      })
      .catch((error) => {
        console.error("Error fetching data from Appwrite:", error);
      });

    console.log("appwrite", dataAppWrite);
  }, [collections.places]);

  useEffect(() => {
    fetchFromAppWrite();
  }, [fetchFromAppWrite]);

  return (
    <main className={styles.container}>
      <section className={styles.welcome}>
        <h1>Welcome!</h1>
        <p>Choose an option from the top navbar</p>
        {data.map((place, index) => (
          <p key={index}>{place.name}</p>
        ))}
      </section>
    </main>
  );
};

export default Homepage;
