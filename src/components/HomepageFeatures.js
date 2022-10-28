import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Store and retrieve content",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
      Estuary will store and retrieve your content quickly using the IPFS spec .
Store content on Filecoin with proposition receipts and successful deal receipts.


      </>
    ),
  },
  {
    title: "Decentralized Web",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
      Estuary is a decentralized data storage service built on the key decentralized web protocols IPFS and Filecoin.
      </>
    ),
  },
  {
    title: "Client APIs",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Build in unlimited decentralized data storage into your application with our developer friendly client APIs
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
