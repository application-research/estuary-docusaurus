import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import ipfslogo from "./../../static/img/home/Ipfs-logo-1024-ice-text.png"
import filecorgi from "./../../static/img/home/Filecorgi.png"
import Swagger_logo from "./../../static/img/home/swagger_logo.svg"

const FeatureList = [
  {
    title: "Store and retrieve content",
    Img: ipfslogo,
    description: (
      <>
      Estuary will store and retrieve your content quickly using the IPFS spec .
Store content on Filecoin with proposition receipts and successful deal receipts.


      </>
    ),
  },
  {
    title: "Decentralized Web",
    Img: filecorgi,
    description: (
      <>
      Estuary is a decentralized data storage service built on the key decentralized web protocols IPFS and Filecoin.
      </>
    ),
  },
  {
    title: "Client APIs",
    Svg: Swagger_logo,
    description: (
      <>
        Build in unlimited decentralized data storage into your application with our developer friendly client APIs
      </>
    ),
  },
];


function ImgOrSVG({Svg, Img, title}){
  if(Svg){
    return <Svg className={styles.featureSvg} alt={title}  style={{padding:"20px"}}/>
  }else{
    return <img src={Img} className={styles.featureSvg} alt={title}  style={{padding:"20px"}}/>
  }
}

function Feature({ Svg, title, description, Img }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
    <ImgOrSVG Svg={Svg} Img={Img} title={title} />
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
