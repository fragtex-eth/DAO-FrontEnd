import React from "react";
import styles from "@/styles/Discussion.module.css";

type Props = {};

export default function Discussion({}: Props) {
  const discussion = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Iaculis ultrices est lobortis pellentesque nibh nunc rhoncus. Sodales ut dui tristique neque malesuada molestie. Id vulputate massa viverra enim. Cras consequat in tellus porttitor vulputate eget dictum. Malesuada vulputate aliquet aliquam diam. Vulputate magnis vitae ac elit etiam turpis id quisque faucibus. Mi pharetra rhoncus dui tempor lacinia eu tempor.",
    },
  ];
  return (
    <div className={styles.content}>
      <h2>Discussion</h2>
      <p className={styles.cont}>{discussion[0].text}</p>
    </div>
  );
}
