import React from "react";
import styles from "@/styles/Home.module.css";
import Information from "./information";
import Result from "./results";
import Votes from "./votes";
type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={styles.content}>
      <Information />
      <Result />
      <Votes />
    </div>
  );
}
