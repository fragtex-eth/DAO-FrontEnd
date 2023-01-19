import React from "react";
import styles from "@/styles/Proposal.module.css";

type Props = {};

export default function Proposal({}: Props) {
  const proposal = [
    {
      name: "Name Proposal",
      text: "Lorem ipsum dolor sit amet consectetur. Iaculis ultrices est lobortis pellentesque nibh nunc rhoncus. Sodales ut dui tristique neque malesuada molestie. Id vulputate massa viverra enim. Cras consequat in tellus porttitor vulputate eget dictum. Malesuada vulputate aliquet aliquam diam. Vulputate magnis vitae ac elit etiam turpis id quisque faucibus. Mi pharetra rhoncus dui tempor lacinia eu tempor.",
      main1:
        "Lorem ipsum dolor sit amet consectetur. Pharetra libero malesuada",
      main2:
        "Lorem ipsum dolor sit amet consectetur. Pharetra libero malesuada",
      main3:
        "Lorem ipsum dolor sit amet consectetur. Pharetra libero malesuada",
    },
  ];

  return (
    <div className={styles.wholesec}>
      <h1>{proposal[0].name}</h1>
      <p className={styles.rect}>{proposal[0].text}</p>
      <div className={styles.section}>
        <div className={styles.point}>
          <h3 className="mainpoint">1</h3>
          <p className="pointdescription">{proposal[0].main1}</p>
        </div>
        <div className={styles.pointmid}>
          <h3 className="mainpoint"> 2</h3>
          <p className="pointdescription">{proposal[0].main2}</p>
        </div>
        <div className={styles.point}>
          <h3 className="mainpoint"> 3</h3>
          <p className="pointdescription">{proposal[0].main3}</p>
        </div>
      </div>
      <div className={styles.btnsection}>
        <button className={styles.vote}>For</button>
        <button className={styles.submit}>Vote</button>
        <button className={styles.vote}>Against</button>
      </div>
    </div>
  );
}
